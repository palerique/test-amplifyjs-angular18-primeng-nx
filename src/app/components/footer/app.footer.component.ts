import {Component} from '@angular/core';
import {LayoutService} from '../../services/app.layout.service';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
})
export class AppFooterComponent {
  constructor(public layoutService: LayoutService) {}
}
