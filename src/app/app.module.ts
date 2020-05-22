import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//http client
import { HttpClientModule} from '@angular/common/http';
//to use color service
import { ColorService } from './services/color.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
