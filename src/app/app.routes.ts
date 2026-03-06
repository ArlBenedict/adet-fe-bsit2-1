import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
<<<<<<< HEAD
];
=======
];
>>>>>>> 9996e05fc434b8e3fc7e91eb20e579303a01e0fa
