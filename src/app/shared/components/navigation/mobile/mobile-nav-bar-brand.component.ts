import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-mobile-nav-bar-brand',
  template: `
    <div class="mobile-nav-bar__brand">
      <!-- <app-mobile-nav-bar-tab
    path="/home"
    label="Home"
    (mobileNavBarTabClick)="onMobileNavBarTabClick($event)"
    ></app-mobile-nav-bar-tab> -->
      <!-- <a (click)="onMobileNavBarBrandClick()" routerLink="/">
        <img
          class="mobile-nav-bar__logo"
          src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
          alt="Auth0 shield logo"
          width="82"
          height="24"
        />
      </a> -->
      <span style="font-size:large">Grocer</span> <!-- TODO: move the HOme click to here -->
    </div>
  `,
})
export class MobileNavBarBrandComponent {
  @Output() mobileNavBarBrandClick = new EventEmitter<void>();

  onMobileNavBarBrandClick(): void {
    this.mobileNavBarBrandClick.emit();
  }
}
