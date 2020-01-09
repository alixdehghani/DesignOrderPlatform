import { HomeComponent } from './home/home.component';
import { DesignSampleComponent } from './design-sample/design-sample.component';
import { TariffComponent } from './tariff/tariff.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'Contact', component: ContactUsComponent},
  {path: 'About', component: AboutUsComponent},
  {path: 'Tariff', component: TariffComponent},
  {path: 'DesignSample', component: DesignSampleComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
