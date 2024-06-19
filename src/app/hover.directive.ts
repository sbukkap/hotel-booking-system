import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true,
})
export class HoverDirective implements OnInit {
  color: string = 'yellow';
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement, "backgroundColor", "pink" 
    )
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement, "backgroundColor", "yellow" 
    )
  }

}
