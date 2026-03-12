import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { WindowsService } from '../windows.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-taskbar',
  imports: [],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css',
  providers: [DatePipe],
})
export class TaskbarComponent implements OnInit, OnDestroy {
  windowService = inject(WindowsService);

  currentTime: Date = new Date();

  formattedDate: string = '';
  private timerId: any;

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    // Initial setzen
    this.updateTime();

    // Jede Sekunde aktualisieren
    this.timerId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  private updateTime(): void {
    const now = new Date();
    this.formattedDate = this.datePipe.transform(now, 'dd.MM.yyyy HH:mm') ?? '';
  }

  ngOnDestroy(): void {
    // Timer stoppen, wenn Komponente zerstört wird
    if (this.timerId) {
      clearInterval(this.timerId);
    }
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
