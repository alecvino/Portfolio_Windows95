import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, Inject, inject } from '@angular/core';
import { WindowsService } from '../windows.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-window-projects',
  imports: [NgClass, CommonModule, CdkDrag],
  templateUrl: './window-projects.component.html',
  styleUrl: './window-projects.component.css',
})
export class WindowProjectsComponent {
  windowService = inject(WindowsService);

  onClose() {
    this.windowService.projectsWindowState = 'closed';
    console.log('Projects window closed');
  }

  onMinimize() {
    this.windowService.projectsWindowState = 'minimized';
    console.log('Projects window minimized');
  }
}
