import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { WindowComponent } from './window-about/window.component';
import { WindowsService } from './windows.service';
import { IconComponent } from './about-icon/icon.component';
import { ProjectIconComponent } from './project-icon/project-icon.component';
import { WindowProjectsComponent } from './window-projects/window-projects.component';
import { FolderIconComponent } from './folder-icon/folder-icon.component';
import { WindowFolderComponent } from './window-folder/window-folder.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TaskbarComponent,
    WindowComponent,
    IconComponent,
    ProjectIconComponent,
    WindowProjectsComponent,
    FolderIconComponent,
    WindowFolderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PVL1';

  windowService = inject(WindowsService);

  /* onOpenFolder() {
    this.windowService.activeWindow = 'folder';
    this.windowService.folderWindowState = 'open';
    console.log('Folder opened');
  }*/
}
