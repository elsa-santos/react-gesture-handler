import { RecognizerBase } from './Gestures.models';

export enum PressEvent {
  PRESS = 'press',
  PRESS_UP = 'pressup'
}

export type PressEvents = Partial<Record<PressEvent, HammerListener>>;

export interface RecognizersPress extends RecognizerBase {
  events?: PressEvents;
}
