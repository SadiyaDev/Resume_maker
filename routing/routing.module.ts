import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './../comonents/search/search.component';

const routes: Routes = [
  { path: '', redirectTo:'/search', pathMatch:'full' },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
 
  CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
 
    exports: [ RouterModule ]
  
})
export class RoutingModule { }
