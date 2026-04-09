import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  activeWindow: string = '';
  windowService = inject(WindowsService);

  onOpen() {
    this.windowService.activeWindow = 'about';
    this.windowService.aboutWindowState = 'open';
    this.windowService.aboutWindowMaximized = false;
    console.log('About me opened');
  }
}
