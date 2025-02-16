import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  systemUser: string = 'fisios@123'
  systemPassoword: string = 'fisios@123'
  error: boolean = false

  loginForm = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router) { }

  submit() {
    const { user, password } = this.loginForm.value!

    if ((user === this.systemUser) && password === this.systemPassoword) {
      localStorage.setItem('auth', 'true')
      console.log('LOGIN CERTO')
      this.router.navigate(['listar'])
    } else {
      this.error = true
    }
  }
}
