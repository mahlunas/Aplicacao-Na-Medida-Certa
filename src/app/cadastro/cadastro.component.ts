import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  imports: [RouterLink],
  styleUrls: ['../login/login.component.css'], // Caminho relativo correto
})
export class CadastroComponent {}
