import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { ShowService } from './show.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowSearchComponent } from './show-search/show-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CurrentShowComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
