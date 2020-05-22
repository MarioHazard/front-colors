import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//http client
import { HttpClientModule} from '@angular/common/http';
//to use color service
import { ColorService } from './services/color.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
