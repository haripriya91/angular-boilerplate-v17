import { ChangeBgColorOnClickDirective } from './change-bg-color-on-click.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ChangeBgColorOnClickDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    elementRef = { nativeElement: document.createElement('div') } as ElementRef;
    renderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
  });

  it('should create an instance', () => {
    const directive = new ChangeBgColorOnClickDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
