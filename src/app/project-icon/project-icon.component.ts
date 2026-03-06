import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-project-icon',
  imports: [],
  templateUrl: './project-icon.component.html',
  styleUrl: './project-icon.component.css',
})
export class ProjectIconComponent {
  activeWindow: string = '';
  windowService = inject(WindowsService);

  onOpenProjects() {
    this.windowService.activeWindow = 'projects';
    if (!this.windowService.openWindowProjects) {
      this.windowService.openWindowProjects = true;
    }
    console.log('Projects opened');
  }
}
