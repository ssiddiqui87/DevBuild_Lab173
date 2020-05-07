import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent} from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';




const routes: Routes = [
  { path: 'donuts', component: DonutsComponent },
  { path: 'donuts/:id', component: DonutDetailComponent },
  { path: 'famous-people', component: FamousPeopleComponent },
  { path: 'famous-people:id', component: FamousPersonDetailComponent },
  { path: '', redirectTo: '/donuts', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
