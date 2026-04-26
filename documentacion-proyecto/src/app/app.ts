import { Component, HostListener, AfterViewInit, inject, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { FeaturesComponent } from './components/features/features';
import { GuiaComponent } from './components/guia/guia';
import { FaqsComponent } from './components/faqs/faqs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, FeaturesComponent, GuiaComponent, FaqsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  private theme = inject(ThemeService);
  protected bgColor: string = '#f8fafc';

  private readonly lightColors: { [key: string]: string } = {
    'inicio': '#f8fafc',
    'features': '#6366f1',
    'guia': '#4f46e5',
    'faqs': '#7c3aed'
  };

  private readonly darkColors: { [key: string]: string } = {
    'inicio': '#0f172a',
    'features': '#1e1b4b',
    'guia': '#1e1b4b',
    'faqs': '#2e1065'
  };

  private viewReady = false;

  constructor() {
    effect(() => {
      this.theme.isDark();
      if (this.viewReady) this.onWindowScroll();
    });
  }

  ngAfterViewInit() {
    this.viewReady = true;
    setTimeout(() => this.onWindowScroll(), 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('.doc-section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 300 && rect.bottom >= 300) {
        this.updateColor(section.id);
      }
    });
  }

  protected getTextColor(): string {
    if (this.bgColor === '#f8fafc') return '#1e293b';
    if (this.bgColor === '#0f172a') return '#e2e8f0';
    return '#ffffff';
  }

  private updateColor(id: string) {
    const colors = this.theme.isDark() ? this.darkColors : this.lightColors;
    this.bgColor = colors[id] || this.bgColor;
  }
}
