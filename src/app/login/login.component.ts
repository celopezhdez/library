import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem("username");
    this.createForm();

  }

  createForm() {
    this.loginForm = this.fb.group({
      username:  ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  login() {
    localStorage.setItem("username", this.loginForm.value.username);
    this.router.navigate(['book']);
  }

  goToLand() {
    this.router.navigate(['']);
  }

}
