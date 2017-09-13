import { BookService } from './book/book.service';
import { LoginComponent } from './login/login.component';
import { AuthenticateGuard } from './authenticate.guard';
import { Routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PageSliderModule} from 'ng2-page-slider';

import { AppComponent } from './app.component';
import { LandpageComponent } from './landpage/landpage.component';

import {MdButtonModule, 
        MdInputModule,
        MdSnackBarModule, 
        MdPaginatorModule, MdTableModule, MdSelectModule, MdAutocompleteModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BookComponent } from './book/book.component';

import {PaginatorModule, DataTableModule, DialogModule} from 'primeng/primeng'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandpageComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PageSliderModule,
    Routing,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    DataTableModule,
    PaginatorModule,
    MdSelectModule,
    MdAutocompleteModule,
    MdSnackBarModule,
    DialogModule
    

    
  ],
  providers: [AuthenticateGuard, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
