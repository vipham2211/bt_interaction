import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrangChuModule } from './trang-chu/trang-chu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,TrangChuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
