import { Component, signal, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('documentacion-proyecto');
  
  // Color inicial corregido para que coincida con el CSS
  protected bgColor: string = '#f8fafc';

  // Al cargar la vista, forzamos la detección de la sección actual
  ngAfterViewInit() {
    setTimeout(() => {
      this.onWindowScroll();
    }, 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('.doc-section');
    
    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      // Detectamos si la sección está en el área visible (viewport)
      if (rect.top <= 300 && rect.bottom >= 300) {
        this.updateColor(section.id);
      }
    });
  }

  private updateColor(id: string) {
    const colors: { [key: string]: string } = {
      'inicio': '#f8fafc',
      'codigo': '#6366f1',
      'funcionalidad': '#8b5cf6'
    };
    
    const nextColor = colors[id];
    if (nextColor && this.bgColor !== nextColor) {
      this.bgColor = nextColor;
    }
  }
}