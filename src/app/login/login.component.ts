import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/post';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
     const username = this.form.get('username').value;
     const password = this.form.get('password').value;

     this.authService
        .authenticate(username, password)
        .subscribe (
          result => {
            this.router.navigate(['/post', username]);
          }, erro => {
            console.log(erro);
            alert('Usuario ou senha invalido!');
          }
        );
  }

}
