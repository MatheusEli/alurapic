import { PlatformDetectorService } from './../../core/platform/PlatformDetectorService.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit,AfterViewInit{
  loginForm: FormGroup;
  @ViewChild('userNameInput', {static: false}) userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.platformDetector.isBrowserPlatform() &&
    this.userNameInput.nativeElement.focus();
  }

  login(): void {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(userName, password).subscribe(
      () => {
        console.log('AUTENTICAÇÃO APROVADA');
        this.router.navigate(['users', userName])
      },
      err => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetector.isBrowserPlatform() && this.userNameInput.nativeElement.focus();
      }
    );
  }
}
