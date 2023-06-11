import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



// devExtreme 
import { DxListModule } from 'devextreme-angular';
import { TestPipe } from './core/pipes/test.pipe';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DxListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
