import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { LoginComponent } from './twoservice/login.service';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './comonents/search/search.component';
import { FilterPipe} from './filter.pipe';
import {RoutingModule} from './routing/routing.module';
//adding routes


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SearchComponent
  ],
  // modules to be used
  imports: [
 
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
