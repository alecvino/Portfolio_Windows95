import { WindowsService } from '../windows.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-g2p',
  imports: [CommonModule, CdkDrag],
  templateUrl: './g2p.component.html',
  styleUrl: './g2p.component.css',
})
export class G2pComponent implements OnInit {
  windowService = inject(WindowsService);
  private previousState: string = 'closed';

  ngOnInit() {
    // Removed getNextOffset call
  }

  ngDoCheck() {
    if (
      this.previousState === 'closed' &&
      this.windowService.g2pWindowState === 'open'
    ) {
      // Removed getNextOffset call
    }
    this.previousState = this.windowService.g2pWindowState;
  }

  onClose() {
    this.windowService.g2pWindowState = 'closed';
    console.log('Window closed');
  }

  onMinimize() {
    this.windowService.g2pWindowState = 'minimized';
    console.log('Window minimized');
  }

  onToggleMaximize() {
    this.windowService.g2pWindowMaximized =
      !this.windowService.g2pWindowMaximized;
    this.windowService.activeWindow = 'g2p';
    console.log(
      'g2p window maximize toggled:',
      this.windowService.g2pWindowMaximized,
    );
  }
}
