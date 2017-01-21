import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
// APP COMPONENTS

const ROUTES: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: UpdateComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES,{useHash: true});
