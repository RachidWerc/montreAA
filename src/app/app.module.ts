import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MontrecompComponent } from './montrecomp/montrecomp.component';
import { SignatureComponent } from './signature/signature.component';

@NgModule({
  declarations: [
    AppComponent,
    MontrecompComponent,
    SignatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
