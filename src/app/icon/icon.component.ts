import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  aboutOpened: boolean = false;

  windowService = inject(WindowsService);

  onOpen() {
    this.aboutOpened = !this.aboutOpened;
    this.windowService.openWindow = !this.windowService.openWindow;
    console.log('About me opened');
  }
}
