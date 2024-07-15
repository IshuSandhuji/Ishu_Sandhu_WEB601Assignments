import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHybridStyle]'
})
export class HybridStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
  }
}
