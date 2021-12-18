import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;

  constructor(
    private router : Router,
    private formBuilder:FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.loginForm=this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required]
      }
    )
  }

  onSubmit() {
    let data = this.loginForm?.value;
    console.log(data);

    /*this.authService.loginUser(this.loginForm.value).subscribe(result=>{
      console.error(result)
    })*/

    this.router.navigate(['dashboard']);

    //this.loginForm.reset();
  }
}
