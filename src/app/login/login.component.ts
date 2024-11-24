import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  constructor() {}

  // Método para lidar com o envio do formulário
  onSubmit(form: NgForm) {
    if (form.valid) {
      const { username, password } = form.value;
      // Aqui você pode implementar a lógica de autenticação
      console.log('Usuário:', username);
      console.log('Senha:', password);
      // Lógica de redirecionamento ou validação pode ser adicionada aqui
    }
  }
}
