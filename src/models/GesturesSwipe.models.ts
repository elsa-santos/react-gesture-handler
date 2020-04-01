import { RecognizerBase } from './Gestures.models';

export enum SwipeEvent {
  SWIPE = 'swipe', // together with all of below
  SWIPE_LEFT = 'swipeleft',
  SWIPE_RIGHT = 'swiperight',
  SWIPE_UP = 'swipeup',
  SWIPE_DOWN = 'swipedown'
}

export type SwipeEvents = Partial<Record<SwipeEvent, HammerListener>>;

export interface RecognizersSwipe extends RecognizerBase {
  events?: SwipeEvents;
}
