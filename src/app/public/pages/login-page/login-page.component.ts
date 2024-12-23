import { Component } from '@angular/core';
import {FloatLabel} from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import {FormsModule} from '@angular/forms';
import {Checkbox} from 'primeng/checkbox';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-login-page',
  imports: [
    FloatLabel,
    PasswordModule,
    FormsModule,
    Checkbox,
    ButtonDirective,
    Ripple,
    InputText
  ],
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  value1!: string;

  value2!: string;

  value3!: string;
}
