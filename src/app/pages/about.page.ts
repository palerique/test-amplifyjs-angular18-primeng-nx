import {Component, signal} from '@angular/core';
import {Button} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-about',
  standalone: true,
  template: '<h1>About is working as expected</h1>',
  styles: [],
  imports: [Button, TooltipModule],
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update(count => count + 1);
  }
}
