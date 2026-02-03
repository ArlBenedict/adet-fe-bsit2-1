import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] = [
    {
      id: 1,
      title: 'Getting Started with Angular',
      description: 'Learn the fundamentals of Angular framework and how to build modern web applications with TypeScript and component-based architecture.'
    },
    {
      id: 2,
      title: 'Understanding Component Lifecycle',
      description: 'Explore the different lifecycle hooks in Angular components and when to use each one for optimal performance and functionality.'
    },
    {
      id: 3,
      title: 'Routing and Navigation',
      description: 'Master Angular routing to create single-page applications with multiple views and seamless navigation between components.'
    },
    {
      id: 4,
      title: 'Reactive Forms Best Practices',
      description: 'Discover how to implement reactive forms in Angular with validation, dynamic controls, and user-friendly input handling.'
    }
  ];

  deletePost(id: number): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
