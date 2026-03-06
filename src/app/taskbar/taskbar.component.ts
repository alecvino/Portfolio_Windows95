import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-taskbar',
  imports: [],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css',
})
export class TaskbarComponent {
  windowService = inject(WindowsService);
  currentTime: Date = new Date();
}
