import { ElementRef, Renderer2 } from '@angular/core';
import { ClassdirectiveDirective } from './classdirective.directive';

describe('ClassdirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new ClassdirectiveDirective();
    expect(directive).toBeTruthy();
  });
});
