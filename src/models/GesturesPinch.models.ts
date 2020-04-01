import { RecognizerBase } from './Gestures.models';

export enum PinchEvent {
  PINCH = 'pinch', //together with all of below
  PINCH_START = 'pinchstart',
  PINCH_MOVE = 'pinchmove',
  PINCH_END = 'pinchend',
  PINCH_CANCEL = 'pinchcancel',
  PINCH_IN = 'pinchin',
  PINCH_OUT = 'pinchout'
}

export type PinchEvents = Partial<Record<PinchEvent, HammerListener>>;

export interface RecognizersPinch extends RecognizerBase {
  events?: PinchEvents;
}
