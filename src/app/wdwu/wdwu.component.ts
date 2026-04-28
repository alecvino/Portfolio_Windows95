import { WindowsService } from '../windows.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-wdwu',
  imports: [CommonModule, CdkDrag],
  templateUrl: './wdwu.component.html',
  styleUrl: './wdwu.component.css',
})
export class WdwuComponent implements OnInit {
  windowService = inject(WindowsService);
  private previousState: string = 'closed';

  ngOnInit() {
    // Removed getNextOffset call
  }

  ngDoCheck() {
    if (
      this.previousState === 'closed' &&
      this.windowService.wdwuWindowState === 'open'
    ) {
      // Removed getNextOffset call
    }
    this.previousState = this.windowService.wdwuWindowState;
  }

  onClose() {
    this.windowService.wdwuWindowState = 'closed';
    console.log('Window closed');
  }

  onMinimize() {
    this.windowService.wdwuWindowState = 'minimized';
    console.log('Window minimized');
  }

  onToggleMaximize() {
    this.windowService.wdwuWindowMaximized =
      !this.windowService.wdwuWindowMaximized;
    this.windowService.activeWindow = 'wdwu';
    console.log(
      'wdwu window maximize toggled:',
      this.windowService.wdwuWindowMaximized,
    );
  }
}
