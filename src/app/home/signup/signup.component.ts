import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform/PlatformDetectorService.service';

@Component({
  templateUrl: './signup.component.html',
  providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements AfterViewInit {
  signUpForm: FormGroup;
  @ViewChild('emailInput') emailInput:ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTaken: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) {
    this.signUpForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[a-z0-9_\-]+$/)
        ],
        this.userNotTaken.checkUserNameTaken(),
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });

  }
  ngAfterViewInit(): void {
    this.platformDetector.isBrowserPlatform() &&
    this.emailInput.nativeElement.focus();
  }

  signUp(): void{
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpService.signUp(newUser).subscribe(() => this.router.navigate(['']), err => console.log(err))
  }
}
