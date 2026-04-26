import { Component, signal } from '@angular/core';

interface Faq {
  q: string;
  a: string;
  open: boolean;
}

@Component({
  selector: 'app-faqs',
  standalone: true,
  templateUrl: './faqs.html'
})
export class FaqsComponent {
  readonly faqs = signal<Faq[]>([
    { q: '¿Es gratis?', a: 'Sí, las funciones principales son gratuitas para todos los usuarios.', open: false },
    { q: '¿Cómo borro mis datos?', a: 'Puedes solicitar la eliminación total desde los ajustes de privacidad de la app.', open: false },
    { q: '¿Qué pasa si olvido mi contraseña?', a: 'Podrás restablecerla mediante tu correo electrónico en la pantalla de inicio de sesión.', open: false },
    { q: '¿La IA falla?', a: 'Nuestra IA tiene un 95% de precisión, pero siempre puedes ajustar los valores manualmente.', open: false },
    { q: '¿Funciona sin internet?', a: 'El escaneo requiere conexión para procesar la imagen con máxima potencia.', open: false },
  ]);

  toggle(index: number) {
    this.faqs.update(faqs =>
      faqs.map((faq, i) => ({ ...faq, open: i === index ? !faq.open : false }))
    );
  }
}
