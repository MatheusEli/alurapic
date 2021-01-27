import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './signup.component.html'
})
export class SignUpComponent{

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.signUpForm = formBuilder.group(
      {
        email:['', [
          Validators.required,
          Validators.email
        ]
      ],
        fullName:['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
        userName:['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[a-z0-9_\-]+$/)
        ]
      ],
        password:['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
      }
    )
  }
}
