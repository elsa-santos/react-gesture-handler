import { RecognizerBase } from './Gestures.models';

export enum RotateEvent {
  ROTATE = 'rotate', //together with all of below
  ROTATE_START = 'rotatestart',
  ROTATE_MOVE = 'rotatemove',
  ROTATE_END = 'rotateend',
  ROTATE_CANCEL = 'rotatecancel'
}

export type RotateEvents = Partial<Record<RotateEvent, HammerListener>>;

export interface RecognizersRotate extends RecognizerBase {
  events?: RotateEvents;
}
