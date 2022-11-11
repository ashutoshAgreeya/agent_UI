import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  isFormSubmitted : boolean = false;

  constructor(
    private fb: FormBuilder,
    private homeService : HomeService,
    private router: Router) {
    this.initLoginForm();
  }

  ngOnInit() {}

  initLoginForm() {
    this.isFormSubmitted = false;
    this.loginForm = this.fb.group({});
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      serverUrl: [null, Validators.required],
    });
  }

  login()
  {
    this.isFormSubmitted = true;
    this.router.navigate(['/home']);
    if(this.loginForm.invalid)
    {
      return;
    }

    const userDetails = {
      username : this.loginForm.value.username,
      password:  this.loginForm.value.password,
      serverurl: this.loginForm.value.serverUrl
    }

    this.homeService.login(userDetails).subscribe((response)=>
    {
      console.log(response);
      this.router.navigate(['/home']);
    }, (error)=>
    {
      console.error("something went wrong : ", error);
    })

  }
}
