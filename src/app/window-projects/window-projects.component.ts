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
    // Removed getNextOffset call
  }

  ngDoCheck() {
    if (
      this.previousState === 'closed' &&
      this.windowService.projectsWindowState === 'open'
    ) {
      // Removed getNextOffset call
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
    this.windowService.lumaWindowMaximized = false;
    console.log('Luma opened');
  }

  onOpenWDWU() {
    this.windowService.activeWindow = 'wdwu';
    this.windowService.wdwuWindowState = 'open';
    this.windowService.wdwuWindowMaximized = false;
    console.log('WDWU opened');
  }

  onOpenG2P() {
    this.windowService.activeWindow = 'g2p';
    this.windowService.g2pWindowState = 'open';
    this.windowService.g2pWindowMaximized = false;
    console.log('G2P opened');
  }
}
