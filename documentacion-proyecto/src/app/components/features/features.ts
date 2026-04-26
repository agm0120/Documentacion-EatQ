import { Component, signal, AfterViewInit, OnDestroy } from '@angular/core';

interface Stat {
  label: string;
  target: number;
  current: number;
  suffix: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.html'
})
export class FeaturesComponent implements AfterViewInit, OnDestroy {
  readonly stats = signal<Stat[]>([
    { label: 'Precisión IA', target: 95, current: 0, suffix: '%' },
    { label: 'Escaneos realizados', target: 50, current: 0, suffix: 'K+' },
    { label: 'Macros analizados', target: 3, current: 0, suffix: '' },
  ]);

  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    if (typeof IntersectionObserver === 'undefined') return;

    const target = document.getElementById('stats-row');
    if (!target) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animateStats();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    this.observer.observe(target);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private animateStats() {
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      this.stats.update(stats =>
        stats.map(s => ({ ...s, current: Math.round(s.target * eased) }))
      );
      if (step >= steps) clearInterval(timer);
    }, 1500 / steps);
  }
}
