import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.formLogin = this.createMyForm();
  }
  
  title = "Login";
  private createMyForm(): FormGroup {
    return this.fb.group({
      email: [
        '',
        [Validators.required],
        [Validators.maxLength(60)],
        [Validators.email],
      ],
      password: ['', [Validators.required]],
    });
  }

  public submitFormulario() {
    if (this.formLogin) {
      if (
        this.formLogin.value.email == 'correo@correo.com' &&
        this.formLogin.value.password == 'yolo1007*'
      ) {
        window.location.href = 'http://localhost:4200/dashboard';
      }
    }
  }
}
