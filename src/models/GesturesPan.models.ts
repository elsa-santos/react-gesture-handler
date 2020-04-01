import { RecognizerBase } from './Gestures.models';

export enum PanEvent {
  PAN = 'pan', //together with all of below
  PAN_START = 'panstart',
  PAN_MOVE = 'panmove',
  PAN_END = 'panend',
  PAN_CANCEL = 'pancancel',
  PAN_LEFT = 'panleft',
  PAN_RIGHT = 'panright',
  PAN_UP = 'panup',
  PAN_DOWN = 'pandown'
}

export type PanEvents = Partial<Record<PanEvent, HammerListener>>;

export interface RecognizersPan extends RecognizerBase {
  events?: PanEvents;
}
