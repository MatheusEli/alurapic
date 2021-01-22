import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective{

  constructor(private el: ElementRef, private render: Renderer2){}

  @HostListener('mouseover')
  darkenOn(): void{
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
  }

  @HostListener('mouseleave')
  darkenOff(): void{
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
