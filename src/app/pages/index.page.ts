import {Component, signal} from '@angular/core';
import {Button} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-home',
  standalone: true,
  template: '',
  styles: [],
  imports: [Button, TooltipModule],
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update(count => count + 1);
  }
}
