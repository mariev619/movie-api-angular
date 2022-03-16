import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'detail/:id', component: DetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
