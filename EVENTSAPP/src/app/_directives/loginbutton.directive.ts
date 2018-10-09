import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoginbutton]'
})
export class LoginbuttonDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow','black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null,null);
  }

  private highlight(bgColor: string, fColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = fColor;
  }

}
