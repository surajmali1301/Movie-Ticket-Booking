import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['user'],
    });
  }
  ngOnInit(): void {}

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirm_password() {
    return this.registerForm.get('confirm_password');
  }
  get role() {
    return this.registerForm.get('role');
  }
  onSubmit() {
    let user = this.registerForm.value;
    this.registerService.register(user).subscribe((result) => {});
    this.route.navigate(['/login']);
    this.registerForm.reset;
  }
  toLogin() {
    this.route.navigate(['/login']);
  }
}
