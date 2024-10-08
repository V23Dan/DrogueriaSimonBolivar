import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../alert/alert.service';
import { AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';

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
    nombre2: [
      '',
      [Validators.maxLength(20), Validators.pattern('^[a-zA-Z]*$')],
    ],
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

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  register(): void {
    const campos = [
      { control: 'nombre1', mensaje: 'Error en el campo primer nombre' },
      { control: 'nombre2', mensaje: 'Error en el campo segundo nombre' },
      { control: 'apellido1', mensaje: 'Error en el campo primer apellido' },
      { control: 'apellido2', mensaje: 'Error en el campo segundo apellido' },
      { control: 'documento', mensaje: 'Error en el campo documento' },
      { control: 'password', mensaje: 'Error en el campo contraseña' },
    ];
    for (const campo of campos) {
      if (
        (this.formGroupRegister.controls as { [key: string]: AbstractControl })[
          campo.control
        ].errors
      ) {
        this.alertService.showToast(campo.mensaje, 'error');
        return; // Sale después de mostrar el primer error encontrado
      }
    }

    this.authService.registerUser(this.formGroupRegister.value).then((res) => {
      if (!res) {
        Swal.fire({
          title: 'Error!',
          text: 'No fue registrado',
          icon: 'error',
        });
      } else {
        Swal.fire({
          title: 'Registrado',
          text: 'Sera direccionado al login',
          icon: 'success',
        });
        this.router.navigate(['auth/login']);
      }
    });
  }
}
