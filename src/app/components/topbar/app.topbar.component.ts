import {Component, ElementRef, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from '../../services/app.layout.service';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  imports: [NgClass, RouterLink, NgOptimizedImage],
})
export class AppTopBarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {}
}
