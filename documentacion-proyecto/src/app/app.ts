import { Component, signal, HostListener } from '@angular/core'; // Añadido HostListener
import { CommonModule } from '@angular/common'; // Añadido CommonModule
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule], // Añadido CommonModule aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('documentacion-proyecto');

  // --- Lógica añadida para el color de fondo ---
  protected bgColor = '#ffffff';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('.doc-section');

    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      // Si la sección está visible en el centro de la pantalla
      if (rect.top <= 300 && rect.bottom >= 300) {
        this.updateColor(section.id);
      }
    });
  }

  private updateColor(id: string) {
    const colors: { [key: string]: string } = {
      'inicio': '#f8fafc',        // Gris humo muy suave (evita el deslumbramiento)
      'codigo': '#5a67d8',        // Índigo equilibrado
      'funcionalidad': '#7e3af2'   // Violeta profundo suave
    };
    this.bgColor = colors[id] || '#f8fafc';
  }



}