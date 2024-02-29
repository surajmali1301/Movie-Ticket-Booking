import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isInvalidCredentials: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: LoginService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser() {
    const credentials = this.loginForm.value;
    this.userService.login(credentials).subscribe(
      (user) => {
        if (user) {
          console.log(user);
          if (user.role_id == '1') {
            console.log(user);
            this.router.navigate(['/addEditMovie']);
          } else if (user.role_id == '2') {
            this.router.navigate(['/movies']);
          }
        } else {
          this.isInvalidCredentials = true;
        }
      },
      (error: any) => {
        console.error(error);
        this.isInvalidCredentials = true;
      }
    );
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
