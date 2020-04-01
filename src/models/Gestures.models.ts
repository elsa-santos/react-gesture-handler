import { RecognizersPan } from './GesturesPan.models';
import { RecognizersPinch } from './GesturesPinch.models';
import { RecognizersPress } from './GesturesPress.models';
import { RecognizersRotate } from './GesturesRotate.models';
import { RecognizersSwipe } from './GesturesSwipe.models';
import { RecognizersTap } from './GesturesTap.models';

export enum RecognizersType {
  Pan = 'Pan',
  Pinch = 'Pinch',
  Press = 'Press',
  Rotate = 'Rotate',
  Swipe = 'Swipe',
  Tap = 'Tap'
}

export interface GesturesProps {
  children: React.ReactNode;
  options?: HammerOptions;
  recognizers?: {
    [RecognizersType.Pan]?: RecognizersPan;
    [RecognizersType.Pinch]?: RecognizersPinch;
    [RecognizersType.Press]?: RecognizersPress;
    [RecognizersType.Rotate]?: RecognizersRotate;
    [RecognizersType.Swipe]?: RecognizersSwipe;
    [RecognizersType.Tap]?: RecognizersTap;
  };
}

export interface RecognizerBase {
  options?: RecognizerOptions;
}
