import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../alert/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export default class LoginComponent {
  private readonly fb = inject(FormBuilder);

  formGroupLogin = this.fb.nonNullable.group({
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

  Login(): void {
    const campos = [
      { control: 'documento', mensaje: 'Error en el campo documento' },
      { control: 'password', mensaje: 'Error en el campo contraseña' },
    ];

    for (const campo of campos) {
      if (
        (this.formGroupLogin.controls as { [key: string]: AbstractControl })[
          campo.control
        ].errors
      ) {
        this.alertService.showToast(campo.mensaje, 'error');
        return; // Sale después de mostrar el primer error encontrado
      }
    }

    this.authService.loginUser(this.formGroupLogin.value).then((res) => {
      if (!res) {
        Swal.fire({
          title: 'Error!',
          text: 'Error al loguearse',
          icon: 'error',
        });
      } else {
        Swal.fire({
          title: 'Logueado',
          text: 'Sera direccionado a la pagina principal',
          icon: 'success',
        });
        this.router.navigate(['dashboard']);
      }
    });
  }
}
