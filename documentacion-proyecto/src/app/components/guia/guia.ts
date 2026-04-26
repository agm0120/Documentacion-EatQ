import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-guia',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './guia.html'
})
export class GuiaComponent {}
