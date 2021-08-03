import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Piano';

  // Creamos el metodo
  aplicarSonido(numero: number): void {
    const audio = new Audio();
    // Configuramos la ruta
    audio.src = '../assets/sonidos/note' + numero + '.wav';
    // Que cargue el audio
    audio.load();
    // Que lo ejecute
    audio.play();
  }
}
