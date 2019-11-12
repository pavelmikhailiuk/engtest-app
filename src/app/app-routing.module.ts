import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { TestComponent } from './test/test.component';
import { TestGlossaryComponent } from './test-glossary/test-glossary.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'record/create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'records',
    component: ProductGetComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'glossarytest',
    component: TestGlossaryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
