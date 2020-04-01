import Hammer from 'hammerjs';
import React from 'react';
import { GesturesProps, RecognizersType } from './models/Gestures.models';

export const Gestures = ({
  children,
  options,
  recognizers
}: GesturesProps): JSX.Element => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const $container: HTMLDivElement | null = containerRef.current;
    let hammer: HammerManager | null = null;
    let recognizersKeyType: RecognizersType[] = [];

    /**
     * initialize hammerJS
     */
    if ($container) {
      hammer = new Hammer($container, options);

      if (recognizers && hammer !== undefined) {
        recognizersKeyType = Object.keys(recognizers) as RecognizersType[];

        recognizersKeyType.forEach(recognizerType => {
          const events = recognizers[recognizerType]?.events;
          const options = recognizers[recognizerType]?.options;

          hammer?.add(new Hammer[recognizerType](options));

          if (events) {
            Object.entries(events).forEach(([eventName, event]) => {
              event && hammer && hammer.on(`${eventName}`, event);
            });
          }
        });
      }
    }

    return () => {
      if ($container && hammer && recognizers) {
        recognizersKeyType.forEach(recognizerType => {
          const events = recognizers[recognizerType]?.events;
          if (events) {
            Object.entries(events).forEach(([eventName, event]) => {
              event && hammer && hammer.off(`${eventName}`, event);
            });
          }
        });
        hammer.destroy();
      }
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default Gestures;
