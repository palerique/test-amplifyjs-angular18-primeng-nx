import {Component, Renderer2, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {AppTopBarComponent} from '../components/topbar/app.topbar.component';
import {Router, RouterOutlet} from '@angular/router';
import {LayoutService} from '../services/app.layout.service';
import {AppSidebarComponent} from '../components/sidebar/app.sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="layout-wrapper" [ngClass]="containerClass">
      <app-topbar></app-topbar>
      <div class="layout-sidebar">
        <app-sidebar></app-sidebar>
      </div>
      <div class="layout-main-container">
        <div class="layout-main">
          <router-outlet></router-outlet>
        </div>
        <!--        <app-footer></app-footer>-->
      </div>
      <!--      <app-config></app-config>-->
      <div class="layout-mask"></div>
    </div>
  `,
  styles: [],
  imports: [NgClass, AppTopBarComponent, RouterOutlet, AppSidebarComponent],
})
export default class HomeComponent {
  count = signal(0);

  constructor(
    public layoutService: LayoutService,
    public renderer: Renderer2,
    public router: Router
  ) {
    // this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
    //   if (!this.menuOutsideClickListener) {
    //     this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
    //       const isOutsideClicked = !(
    //         this.appSidebar.el.nativeElement.isSameNode(event.target) ||
    //         this.appSidebar.el.nativeElement.contains(event.target) ||
    //         this.appTopbar.menuButton.nativeElement.isSameNode(event.target) ||
    //         this.appTopbar.menuButton.nativeElement.contains(event.target)
    //       );
    //
    //       if (isOutsideClicked) {
    //         this.hideMenu();
    //       }
    //     });
    //   }
    //
    //   if (!this.profileMenuOutsideClickListener) {
    //     this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
    //       const isOutsideClicked = !(
    //         this.appTopbar.menu.nativeElement.isSameNode(event.target) ||
    //         this.appTopbar.menu.nativeElement.contains(event.target) ||
    //         this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) ||
    //         this.appTopbar.topbarMenuButton.nativeElement.contains(event.target)
    //       );
    //
    //       if (isOutsideClicked) {
    //         this.hideProfileMenu();
    //       }
    //     });
    //   }
    //
    //   if (this.layoutService.state.staticMenuMobileActive) {
    //     this.blockBodyScroll();
    //   }
    // });
    //
    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
    //   this.hideMenu();
    //   this.hideProfileMenu();
    // });
  }

  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config().colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config().colorScheme === 'dark',
      'layout-overlay': this.layoutService.config().menuMode === 'overlay',
      'layout-static': this.layoutService.config().menuMode === 'static',
      'layout-static-inactive':
        this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config().inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config().ripple,
    };
  }
}
