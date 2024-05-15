import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  projects = [
    {
      title: 'Project 1',
      imageUrl: 'https://placehold.co/400x230',
      description: 'Quae facere obcaecati dignissimos a unde. Accusamus nobis vitae rerum id impedit.',
      repoUrl: 'https://github.com/user/project1'
    },
    {
      title: 'Project 2',
      imageUrl: 'https://placehold.co/400x230',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      repoUrl: 'https://github.com/user/project2'
    },
    {
      title: 'Project 3',
      imageUrl: 'https://placehold.co/400x230',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      repoUrl: 'https://github.com/user/project3'
    },
  ];

  constructor() { }

}
