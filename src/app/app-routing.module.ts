import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdCampaignPageComponent } from './view/ad-campaign-page/ad-campaign-page.component';
import { BussinessPageComponent } from './view/bussiness-page/bussiness-page.component';
import { BudgetComponent } from './common/budget/budget.component';
const routes: Routes = [
  { path: 'bussiness_page', component: BussinessPageComponent},
  { path: 'ad_campaign_page', component: AdCampaignPageComponent},
  { path: 'budget_page', component: BudgetComponent},
  { path: '**', component: BussinessPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [BussinessPageComponent, AdCampaignPageComponent, BudgetComponent];
