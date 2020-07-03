import { trigger, state, style, animate, transition } from '@angular/animations';

export const ToggleRegion = trigger('showRegion', [
  state('false', style({ height: '0px' })),
  state('true', style({ maxHeight: '100%' })),
  transition('false=>true', animate('100ms')),
  transition('true=>false', animate('100ms'))
]);

export const RotateIcon = trigger('rotateIcon', [
  state('false', style({ transform: 'rotate(0deg)' })),
  state('true', style({ transform: 'rotate(180deg)' })),
  transition('false=>true', animate('100ms')),
  transition('true=>false', animate('100ms'))
]);