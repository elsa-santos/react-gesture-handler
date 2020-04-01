import { RecognizerBase } from './Gestures.models';

export enum TapEvent {
  TAP = 'tap'
}

export type TapEvents = Partial<Record<TapEvent, HammerListener>>;

export interface RecognizersTap extends RecognizerBase {
  events?: TapEvents;
}
