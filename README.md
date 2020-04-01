# React Gesture Handler

React component to detect touch gestures. It's a react port of [hammerjs](https://hammerjs.github.io/) :)

## Events
- Pan
- Pinch
- Press
- Rotate
- Swipe
- Tap


## Getting Started

### Installing

```
npm i react-gesture-handler hammerjs --save
npm i @types/hammerjs --save-dev
```

### Usage
[Example with pan](https://codesandbox.io/s/react-gesture-handler-simple-example-with-pan-d0b7t)

```
import * as React from "react";
import { Gestures } from "react-gesture-handler";

const MyComponent = () => {
  const [eventType, setEventType] = React.useState<string>("");

  const handleGesture = (event: HammerInput) => setEventType(event.type);

  return (
    <Gestures
      recognizers={{
        Pan: {
          events: {
            panleft: handleGesture,
            panright: handleGesture,
            panup: handleGesture,
            pandown: handleGesture
          }
        }
      }}
    >
      <div>
        <h1>Gesture Section {eventType && ` - This is ${eventType}`}</h1>
      </div>
    </Gestures>
  );
};
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/elsa-santos/react-gesture-handler/blob/master/LICENSE) file for details
