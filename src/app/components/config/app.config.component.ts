import {Component, Input} from '@angular/core';
import {LayoutService} from '../../services/app.layout.service';
import {MenuService} from '../../services/app.menu.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormsModule} from '@angular/forms';
import {ButtonDirective} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {InputSwitchModule} from 'primeng/inputswitch';

@Component({
  standalone: true,
  selector: 'app-config',
  templateUrl: './app.config.component.html',
  imports: [RadioButtonModule, FormsModule, ButtonDirective, SidebarModule, NgClass, NgForOf, NgIf, InputSwitchModule],
})
export class AppConfigComponent {
  @Input() minimal: boolean = false;

  scales: number[] = [12, 13, 14, 15, 16];

  constructor(
    public layoutService: LayoutService,
    public menuService: MenuService
  ) {}

  get visible(): boolean {
    return this.layoutService.state.configSidebarVisible;
  }

  set visible(_val: boolean) {
    this.layoutService.state.configSidebarVisible = _val;
  }

  get scale(): number {
    return this.layoutService.config().scale;
  }

  set scale(_val: number) {
    this.layoutService.config.update(config => ({
      ...config,
      scale: _val,
    }));
  }

  get menuMode(): string {
    return this.layoutService.config().menuMode;
  }

  set menuMode(_val: string) {
    this.layoutService.config.update(config => ({
      ...config,
      menuMode: _val,
    }));
  }

  get inputStyle(): string {
    return this.layoutService.config().inputStyle;
  }

  set inputStyle(_val: string) {
    this.layoutService.config().inputStyle = _val;
  }

  get ripple(): boolean {
    return this.layoutService.config().ripple;
  }

  set ripple(_val: boolean) {
    this.layoutService.config.update(config => ({
      ...config,
      ripple: _val,
    }));
  }

  get theme(): string {
    return this.layoutService.config().theme;
  }

  set theme(val: string) {
    this.layoutService.config.update(config => ({
      ...config,
      theme: val,
    }));
  }

  get colorScheme(): string {
    return this.layoutService.config().colorScheme;
  }

  set colorScheme(val: string) {
    this.layoutService.config.update(config => ({
      ...config,
      colorScheme: val,
    }));
  }

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  changeTheme(theme: string, colorScheme: string) {
    this.theme = theme;
    this.colorScheme = colorScheme;
  }

  decrementScale() {
    this.scale--;
  }

  incrementScale() {
    this.scale++;
  }
}
