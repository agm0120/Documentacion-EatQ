import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html'
})
export class HeroComponent {
  toast: any;

  onDownload() {
    this.toast.show('Descargando... si no se descarga presiona F12 e intenta de nuevo');
    const link = document.createElement('a');
    link.href = '/app-release.apk';
    link.download = 'EatQ.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
