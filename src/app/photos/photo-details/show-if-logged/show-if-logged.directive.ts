import { UserService } from './../../../core/user/user.service';
import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {

  currentDisplay:string;
  constructor(
    private render: Renderer2,
    private userService: UserService,
    private element: ElementRef<any>
  ) {}

  ngOnInit(): void {

    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
    this.userService.getUser().subscribe(user => {
      if(user){
        this.render.setStyle(this.element.nativeElement, 'display', this.currentDisplay);
      }else{
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.render.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}
