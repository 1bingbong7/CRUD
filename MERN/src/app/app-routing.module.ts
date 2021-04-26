import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrudComponent, AddComponent, EditComponent} from "./crud/crud.component"
const routes: Routes = [
  {
    path: "",
    component: CrudComponent,
  },
  {
    path: "Add",
    component: AddComponent,
  },
  {
    path: "Edit/:id",
    component: EditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
