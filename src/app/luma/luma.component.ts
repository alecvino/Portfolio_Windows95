import { WindowsService } from '../windows.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-luma',
  imports: [CommonModule, CdkDrag],
  templateUrl: './luma.component.html',
  styleUrl: './luma.component.css',
})
export class LumaComponent implements OnInit {
  windowService = inject(WindowsService);
  private previousState: string = 'closed';

  ngOnInit() {
    if (
      this.windowService.lumaWindowState === 'open' &&
      this.windowService.lumaWindowOffset === 0
    ) {
      this.windowService.lumaWindowOffset = this.windowService.getNextOffset();
    }
  }

  ngDoCheck() {
    if (
      this.previousState === 'closed' &&
      this.windowService.lumaWindowState === 'open'
    ) {
      if (this.windowService.lumaWindowOffset === 0) {
        this.windowService.lumaWindowOffset =
          this.windowService.getNextOffset();
      }
    }
    this.previousState = this.windowService.lumaWindowState;
  }

  onClose() {
    this.windowService.lumaWindowState = 'closed';
    console.log('Window closed');
  }

  onMinimize() {
    this.windowService.lumaWindowState = 'minimized';
    console.log('Window minimized');
  }

  onToggleMaximize() {
    this.windowService.lumaWindowMaximized =
      !this.windowService.lumaWindowMaximized;
    this.windowService.activeWindow = 'luma';
    console.log(
      'Luma window maximize toggled:',
      this.windowService.lumaWindowMaximized,
    );
  }
}
