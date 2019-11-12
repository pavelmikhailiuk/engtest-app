import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from './records.service';
import { RecordsHolder } from './RecordsHolder';
import { TestComponent } from './test/test.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Score } from './Score';
import { LoginComponent } from './login/login.component';
import { TestGlossaryComponent } from './test-glossary/test-glossary.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    TestComponent,
    LoginComponent,
    TestGlossaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [RecordsService, RecordsHolder, Score],
  bootstrap: [AppComponent]
})
export class AppModule { }
