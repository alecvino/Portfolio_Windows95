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
  activeWindow: string = '';
  windowService = inject(WindowsService);

  onOpen() {
    this.windowService.activeWindow = 'about';
    this.aboutOpened = !this.aboutOpened;
    this.windowService.openWindowAbout = !this.windowService.openWindowAbout;
    console.log('About me opened');
  }
}
