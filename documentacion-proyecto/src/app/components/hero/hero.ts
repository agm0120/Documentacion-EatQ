import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html'
})
export class HeroComponent {
  private toast = inject(ToastService);

  onDownload() {
    this.toast.show('Descargando EatQ...', '📥');
    const link = document.createElement('a');
    link.href = 'app-release.apk';
    link.download = 'EatQ.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
