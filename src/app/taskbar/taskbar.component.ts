import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-taskbar',
  imports: [],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css',
  providers: [DatePipe],
})
export class TaskbarComponent {
  windowService = inject(WindowsService);
  formattedDate: string;

  constructor(private datePipe: DatePipe) {
    const today = new Date();
    this.formattedDate =
      this.datePipe.transform(today, 'dd.MM.yyyy HH:mm') ?? '';
  }

  onProjectsClick() {
    this.windowService.activeWindow = 'projects';
    this.windowService.projectsWindowState = 'open';
    console.log('Projects window opened');
  }

  onAboutClick() {
    this.windowService.activeWindow = 'about';
    this.windowService.aboutWindowState = 'open';
    console.log('About me window opened');
  }

  onFolderClick() {
    this.windowService.activeWindow = 'folder';
    this.windowService.folderWindowState = 'open';
    console.log('Folder window opened');
  }
}
