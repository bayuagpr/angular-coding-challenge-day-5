import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
