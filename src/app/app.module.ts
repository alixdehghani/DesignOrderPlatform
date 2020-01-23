import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopMenuComponent } from './Navigation/top-menu/top-menu.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TariffComponent } from './tariff/tariff.component';
import { DesignSampleComponent } from './design-sample/design-sample.component';
import { SideNavComponent } from './Navigation/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    TariffComponent,
    DesignSampleComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
