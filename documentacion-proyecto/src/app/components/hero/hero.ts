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
    this.toast.show('Próximamente en Google Play', '🚀');
  }
}
