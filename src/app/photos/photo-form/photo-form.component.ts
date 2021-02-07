import { PhotoService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { AlertService } from 'src/app/shared/component/alert/alert.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss'],
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  preview: string;
  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(300)]],
      allowComments: [true],
    });
  }

  upLoad(): void {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;

    this.photoService
      .upLoad(description, allowComments, this.file)
      .subscribe(() =>{
        this.alertService.success('Upload complete', true);
        this.router.navigate(['/users', this.userService.getUserName()]);
      });
  }

  handleFile(file: File): void{
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result
    reader.readAsDataURL(file);
  }
}
