import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  projects = [
    {
      title: 'Port scanner',
      imageUrl: '../../assets/scanner.png',
      description: 'This program scans TCP and UDP ports on a specific IP address (e.g. 192.168.1.1) to determine if they are busy or free. It then generates a CSV report with the scan results, including the status (busy or free) and the service associated with the port, if known.',
      repoUrl: 'https://github.com/Leonix64/PortScanning'
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

  constructor() {}

  ngOnInit() {}
}
