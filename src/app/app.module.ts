import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { ParqueaderoService } from './parqueadero/parqueadero.service';

@NgModule({
  declarations: [
    AppComponent,
    ParqueaderoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
	  NgbModule.forRoot()
  ],
  providers: [ParqueaderoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
