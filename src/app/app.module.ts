import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BussinessComponent } from './common/bussiness/bussiness.component';
import { AdCampaignComponent } from './common/ad-campaign/ad-campaign.component';
import { BussinessPageComponent } from './view/bussiness-page/bussiness-page.component';
import { AdCampaignPageComponent } from './view/ad-campaign-page/ad-campaign-page.component';
import { BudgetComponent } from './common/budget/budget.component';


@NgModule({
  declarations: [
    AppComponent,
    BussinessComponent,
    AdCampaignComponent,
    BussinessPageComponent,
    AdCampaignPageComponent,
    routingComponents,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
