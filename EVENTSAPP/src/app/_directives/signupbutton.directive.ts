import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSignupbutton]'
})
export class SignupbuttonDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red','black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null,null);
  }

  private highlight(bgColor: string, fColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = fColor;
  }

}
