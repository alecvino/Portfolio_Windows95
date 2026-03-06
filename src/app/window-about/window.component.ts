import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-window',
  imports: [NgClass],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css',
})
export class WindowComponent {
  windowService = inject(WindowsService);
}
