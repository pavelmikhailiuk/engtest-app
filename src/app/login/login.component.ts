import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private as: RecordsService) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.as.login(loginPayload).subscribe(data => {
      console.log(data);
      this.router.navigate(['records']);
      // if(data.status === 200) {
      //   window.localStorage.setItem('token', data.result.token);
      //   this.router.navigate(['records']);
      // }else {
      //   this.invalidLogin = true;
      //   alert(data.message);
      // }
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
