import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-taskbar',
  imports: [],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css',
})
export class TaskbarComponent {
  windowService = inject(WindowsService);

  onProjectsClick() {
    this.windowService.activeWindow = 'projects';
    this.windowService.projectsWindowState = 'open';
    console.log('Projects window opened');
  }

  onAboutClick() {
    this.windowService.activeWindow = 'about';
    this.windowService.aboutWindowState = 'open';
    console.log('About me window opened');
  }
}
