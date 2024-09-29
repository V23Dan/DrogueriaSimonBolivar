import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styles: ``,
})
export default class RegisterComponent {
  private readonly fb = inject(FormBuilder);

  formGroupRegister = this.fb.nonNullable.group({
    nombre1: [
      '',
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z]*$'),
      ],
    ],
    nombre2: ['', [Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')]],
    apellido1: [
      '',
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z]*$'),
      ],
    ],
    apellido2: [
      '',
      [Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')],
    ],
    documento: [
      '',
      [
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(30)],
    ],
  });

  constructor(private router: Router) {}

  register(): void {
    if (this.formGroupRegister.valid) {
      alert('Formulario correcto, sera enviado');
    } else {
      alert('Formulario no valido');
    }
  }
}
