import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router:Router, private demo:DemoService) { }
  
  ngOnInit() {
    this.demo.getUsers().subscribe(res => {
      console.log('from headersinterceptor', res);

    });

   


    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onSubmit() {
    console.log(this.loginForm);

   this.router.navigate(['/home']);

  }
}