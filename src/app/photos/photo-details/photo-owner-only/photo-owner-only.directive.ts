import { UserService } from './../../../core/user/user.service';
import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';
import { Photo } from '../../photo/photo';

@Directive({
  selector: '[photoOwnerOnly]',
})
export class PhotoOwnerOnlyDirective implements OnInit{

  @Input() photoOwner: Photo;

  constructor(
    private render: Renderer2,
    private userService: UserService,
    private element: ElementRef<any>
  ) {}

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe(user => {
      if(!user || user.id != this.photoOwner.userId){
        this.render.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });
  }
}
