import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHilight]'
})


export class HilightDirective {
  @Input() defaultColor: string;

  // tslint:disable-next-line:no-input-rename
  @Input('appHilight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private el: ElementRef) { }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
