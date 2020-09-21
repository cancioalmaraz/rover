import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GpsComponent } from './components/data/gps/gps.component';
import { appRouting } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AnglesComponent } from './components/data/angles/angles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GpsComponent,
    AboutComponent,
    FooterComponent,
    AnglesComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
