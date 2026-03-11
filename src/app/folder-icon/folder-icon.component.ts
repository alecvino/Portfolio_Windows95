import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-folder-icon',
  imports: [],
  templateUrl: './folder-icon.component.html',
  styleUrl: './folder-icon.component.css',
})
export class FolderIconComponent {
  activeWindow: string = '';
  windowService = inject(WindowsService);

  onOpenFolder() {
    this.windowService.activeWindow = 'folder';
    this.windowService.folderWindowState = 'open';
    console.log('Folder opened');
  }
}
