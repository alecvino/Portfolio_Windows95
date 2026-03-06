import { Component, Inject, inject } from '@angular/core';
import { WindowsService } from '../windows.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-window-projects',
  imports: [NgClass],
  templateUrl: './window-projects.component.html',
  styleUrl: './window-projects.component.css',
})
export class WindowProjectsComponent {
  windowService = inject(WindowsService);
}
