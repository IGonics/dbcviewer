import { BrowserModule } from '@angular/platform-browser';
import {SafePipeModule } from 'safe-pipe';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DbcviewComponent } from './components/dbcview/dbcview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropDirective } from './directives/drag-drop.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DbcviewComponent,
    DragDropDirective
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SafePipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
