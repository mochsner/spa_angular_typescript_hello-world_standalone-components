import { Component } from '@angular/core';
import { Auth0FeatureComponent } from './auth0-feature.component';

@Component({
  standalone: true,
  imports: [Auth0FeatureComponent],
  selector: 'app-auth0-features',
  template: `
    <div class="auth0-features">
      <h2 class="auth0-features__title">Explore Features</h2>
      <div class="auth0-features__grid">
        <app-auth0-feature
          title="List ingredients you'd buy"
          description="List once, add to multiple recipes."
          resourceUrl=""
          icon=""
        ></app-auth0-feature>
        <app-auth0-feature
          title="Add Ingredients to Recipes"
          description="Multiples of each recipe are modifiable."
          resourceUrl=""
          icon=""
        ></app-auth0-feature>
        <app-auth0-feature
          title="Choose Recipes, and shop by store sections with ease!"
          description="Each shopping list item(s) also has a reference to where/how it was added."
          resourceUrl=""
          icon=""
        ></app-auth0-feature>
      </div>
    </div>
  `,
})
export class Auth0FeaturesComponent {}
