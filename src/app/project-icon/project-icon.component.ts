import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-project-icon',
  imports: [],
  templateUrl: './project-icon.component.html',
  styleUrl: './project-icon.component.css',
})
export class ProjectIconComponent {
  projectsOpened: boolean = false;
  windowService = inject(WindowsService);
  onOpenProjects() {
    this.projectsOpened = !this.projectsOpened;
    this.windowService.openWindowProjects =
      !this.windowService.openWindowProjects;
    console.log('Projects opened');
  }
}
