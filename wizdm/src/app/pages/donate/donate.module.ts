import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContentRouterModule, RoutesWithContent } from '@wizdm/content';
import { GtagModule } from '@wizdm/gtag';
import { ReadmeModule } from '@wizdm/readme';
import { RedirectModule } from '@wizdm/redirect';
import { StripeModule } from '@wizdm/stripe';
import { StripeCardModule } from '@wizdm/stripe/card';
import { StripeMaterialModule } from '@wizdm/stripe/material';
import { DonateComponent } from './donate.component';

const routes: RoutesWithContent = [
  {
    path: '',
    content: 'donate',
    component: DonateComponent
  }
];

@NgModule({
  declarations: [ DonateComponent ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    GtagModule,
    ReadmeModule,
    RedirectModule,
    StripeModule,
    StripeCardModule,
    StripeMaterialModule,
    ContentRouterModule.forChild(routes)
  ]
})
export class DonateModule { }
