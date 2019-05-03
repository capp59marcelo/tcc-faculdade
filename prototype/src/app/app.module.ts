import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHomeComponent } from './shared/navbar-home/navbar-home.component';
import { CompanyCardComponent } from './shared/company-card/company-card.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    CompanyCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }