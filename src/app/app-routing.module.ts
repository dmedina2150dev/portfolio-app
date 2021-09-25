import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomerComponent } from './homer/homer.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: 'post/:id',
    component: PostDetailComponent
  },
  {
    path: '',
    component: HomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
