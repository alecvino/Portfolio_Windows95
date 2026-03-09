import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-window',
  imports: [NgClass, CommonModule, CdkDrag],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css',
})
export class WindowComponent {
  windowService = inject(WindowsService);

  onClose() {
    this.windowService.aboutWindowState = 'closed';
    console.log('Window closed');
  }

  onMinimize() {
    this.windowService.aboutWindowState = 'minimized';
    console.log('Window minimized');
  }
}
