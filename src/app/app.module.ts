import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { routes } from './app.routing';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    routes,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class AppModule { }