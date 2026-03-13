import { WindowsService } from '../windows.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-luma',
  imports: [CommonModule, CdkDrag],
  templateUrl: './luma.component.html',
  styleUrl: './luma.component.css',
})
export class LumaComponent {
  windowService = inject(WindowsService);

  onClose() {
    this.windowService.lumaWindowState = 'closed';
    console.log('Window closed');
  }

  onMinimize() {
    this.windowService.lumaWindowState = 'minimized';
    console.log('Window minimized');
  }
}
