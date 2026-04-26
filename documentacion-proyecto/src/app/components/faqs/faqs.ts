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
    { q: '¿Es gratis?', a: 'Sí, las funciones principales son gratuitas para todos los usuarios. Estamos trabajando en un plan premium con funciones avanzadas, pero el análisis nutricional básico siempre será gratuito.', open: false },
    { q: '¿Cómo borro mis datos?', a: 'Puedes solicitar la eliminación total de tu cuenta y datos desde los ajustes de privacidad de la app. El proceso es inmediato y no conservamos ninguna copia de tu información personal ni de tus escaneos.', open: false },
    { q: '¿Qué pasa si olvido mi contraseña?', a: 'Puedes restablecerla fácilmente desde la pantalla de inicio de sesión usando tu correo electrónico. Recibirás un enlace de recuperación en pocos segundos. Si no ves el correo, revisa tu carpeta de spam.', open: false },
    { q: '¿La IA falla?', a: 'La IA puede cometer errores, especialmente con platos muy elaborados o poco comunes. En esos casos, la app te permite ajustar los valores manualmente para que el registro sea siempre preciso.', open: false },
    { q: '¿Funciona sin internet?', a: 'El análisis de imagen requiere conexión a internet para procesarse en nuestros servidores. Sin embargo, podrás consultar tu historial y los registros anteriores sin necesidad de estar conectado.', open: false },
  ]);

  toggle(index: number) {
    this.faqs.update(faqs =>
      faqs.map((faq, i) => ({ ...faq, open: i === index ? !faq.open : false }))
    );
  }
}
