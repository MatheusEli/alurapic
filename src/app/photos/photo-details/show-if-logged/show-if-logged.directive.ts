import { UserService } from './../../../core/user/user.service';
import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {
  constructor(
    private render: Renderer2,
    private userService: UserService,
    private element: ElementRef<any>
  ) {}

  ngOnInit(): void {
    !this.userService.isLogged() &&
      this.render.setStyle(this.element.nativeElement, 'display', 'none');
  }
}
