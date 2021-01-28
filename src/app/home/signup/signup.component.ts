import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signup.component.html',
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTaken: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router
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

  signUp(): void{
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpService.signUp(newUser).subscribe(() => this.router.navigate(['']), err => console.log(err))
  }
}
