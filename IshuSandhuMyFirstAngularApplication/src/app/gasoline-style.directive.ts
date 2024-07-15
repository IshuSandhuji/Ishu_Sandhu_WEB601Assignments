import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGasolineStyle]'
})
export class GasolineStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'grey');
  }
}
