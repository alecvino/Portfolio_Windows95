import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, inject, OnInit } from '@angular/core';
import { WindowsService } from '../windows.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-window-projects',
  imports: [NgClass, CommonModule, CdkDrag],
  templateUrl: './window-projects.component.html',
  styleUrl: './window-projects.component.css',
})
export class WindowProjectsComponent implements OnInit {
  windowService = inject(WindowsService);
  activeWindow: string = '';
  private previousState: string = 'closed';

  ngOnInit() {
    if (
      this.windowService.projectsWindowState === 'open' &&
      this.windowService.projectsWindowOffset === 0
    ) {
      this.windowService.projectsWindowOffset =
        this.windowService.getNextOffset();
    }
  }

  ngDoCheck() {
    if (
      this.previousState === 'closed' &&
      this.windowService.projectsWindowState === 'open'
    ) {
      if (this.windowService.projectsWindowOffset === 0) {
        this.windowService.projectsWindowOffset =
          this.windowService.getNextOffset();
      }
    }
    this.previousState = this.windowService.projectsWindowState;
  }

  onClose() {
    this.windowService.projectsWindowState = 'closed';
    console.log('Projects window closed');
  }

  onMinimize() {
    this.windowService.projectsWindowState = 'minimized';
    console.log('Projects window minimized');
  }

  onToggleMaximize() {
    this.windowService.projectsWindowMaximized =
      !this.windowService.projectsWindowMaximized;
    this.windowService.activeWindow = 'projects';
    console.log(
      'Projects window maximize toggled:',
      this.windowService.projectsWindowMaximized,
    );
  }

  onOpenLuma() {
    this.windowService.activeWindow = 'luma';
    this.windowService.lumaWindowState = 'open';
    console.log('Luma opened');
  }
}
