import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TestApiComponent } from './test-api/test-api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmFormComponent } from './confirm-form/confirm-form.component';



const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'restapi', component: TestApiComponent },
  { path: 'confirm', component: ConfirmFormComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
