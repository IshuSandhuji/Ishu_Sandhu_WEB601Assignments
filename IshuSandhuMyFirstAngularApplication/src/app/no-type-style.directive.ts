import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNoTypeStyle]'
})
export class NoTypeStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle();
  }

  private setStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'grey');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
