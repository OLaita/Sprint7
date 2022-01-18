import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './home/panel/panel.component';
import { PesupuestoTotalService } from './home/pesupuesto-total.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PessupostListComponent } from './home/pessupost-list/pessupost-list.component';
// import { DataTablesModule } from 'angular-datatables';
// import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelComponent,
    WelcomeComponent,
    PessupostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [PesupuestoTotalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
