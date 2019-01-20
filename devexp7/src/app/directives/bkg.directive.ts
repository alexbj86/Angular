import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBkg]'
})
export class BkgDirective implements AfterViewInit{

  @Input()
  appBkg: string;

  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appBkg;
  }

}
