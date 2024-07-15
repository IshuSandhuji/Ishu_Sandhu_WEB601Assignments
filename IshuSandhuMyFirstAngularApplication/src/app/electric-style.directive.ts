import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElectricStyle]'
})
export class ElectricStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'black');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
  }
}
