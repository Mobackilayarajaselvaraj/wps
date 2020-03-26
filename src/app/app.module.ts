import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule  } from 'ngx-toastr';


import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';




import { AppComponent } from './app.component';
import { BackendApiService } from './services/backend-api.service';
import { LoginComponent } from './login/login.component';
import { ListingComponent } from './listing/listing.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listing', component: ListingComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),

  ],
  providers: [BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
