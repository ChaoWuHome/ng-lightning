import {Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'figure[nglFigure]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './figure.html',
  host: {
    '[class.slds-image]': 'true',
    '[class.slds-image--card]': 'true',
  },
})
export class NglFigure  {
  @Input('nglTitle') title: string = null;

  constructor(public element: ElementRef, public renderer: Renderer2) {  }
}