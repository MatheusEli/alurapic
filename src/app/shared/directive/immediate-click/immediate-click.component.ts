import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/platform/PlatformDetectorService.service';

@Directive({
  selector: '[immediateClick]',
})
export class ImmediateClickDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.platformDetectorService.isBrowserPlatform() && this.element.nativeElement.click();
  }
}
