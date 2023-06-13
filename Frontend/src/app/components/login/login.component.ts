import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  reactiveForm!: FormGroup;
  password!: string;
  email!: string;
  isLoading: boolean = false;
  http: any;


  constructor(private authService: AuthserviceService, private router: Router) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.min(8)]),
    });
  }

  onSubmit() {
    this.login(this.email, this.password);
  }

  login(email: string, password: string) {
    this.isLoading = true;
    this.authService.login(email, password).subscribe((data) => {
      if (data.length != 0) {
        this.authService.isUserLoggedIn = true;
        localStorage.setItem(
          'isUserLoggedIn',
          JSON.stringify(this.authService.isUserLoggedIn)
        );

        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/home']);
        }, 2000);
      } else {
        this.authService.isUserLoggedIn = false;
        localStorage.removeItem('isUserLoggedIn');

        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    });
  }

login(emailParam: string, passwordParam: string): Observable<any> {
    const credentials = {
      email: emailParam,
      password: passwordParam,
    };

    console.log(credentials, 'entered credentials');

    return this.http.post(${this.URL}/users/auth/this.login, credentials);
  }
}
