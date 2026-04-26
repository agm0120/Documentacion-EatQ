import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './features.html'
})
export class FeaturesComponent {}
