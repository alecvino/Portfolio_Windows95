import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-window-folder',
  imports: [NgClass, CommonModule, CdkDrag],
  templateUrl: './window-folder.component.html',
  styleUrl: './window-folder.component.css',
})
export class WindowFolderComponent {
  windowService = inject(WindowsService);

  onClose() {
    this.windowService.folderWindowState = 'closed';
    console.log('Folder window closed');
  }

  onMinimize() {
    this.windowService.folderWindowState = 'minimized';
    console.log('Folder window minimized');
  }

  images = [
    { src: 'fillerPictures/pinkDice.jpg', title: 'Bild 1' },
    { src: 'fillerPictures/whiteDice.jpg', title: 'Bild 2' },
    { src: 'fillerPictures/greenDice.jpg', title: 'Bild 3' },
    { src: 'fillerPictures/blueDice.jpg', title: 'Bild 4' },
    { src: 'fillerPictures/purpleDice.jpg', title: 'Bild 5' },
    /* { src: 'fillerPic.jpg', title: 'Bild 6' },
    { src: 'fillerPic.jpg', title: 'Bild 7' },
    { src: 'fillerPic.jpg', title: 'Bild 8' },
    { src: 'fillerPic.jpg', title: 'Bild 9' },*/
  ];

  selectedIndex: number | null = null;

  // Öffnet Lightbox mit bestimmtem Bild
  openLightbox(index: number) {
    this.selectedIndex = index;
  }

  // Schließt Lightbox
  closeLightbox() {
    this.selectedIndex = null;
  }

  // Zum nächsten Bild
  nextImage(event: Event) {
    event.stopPropagation();
    if (this.selectedIndex !== null) {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }
  }

  // Zum vorherigen Bild
  prevImage(event: Event) {
    event.stopPropagation();
    if (this.selectedIndex !== null) {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.images.length) % this.images.length;
    }
  }

  // Aktuelles Bild holen
  get selectedImage() {
    return this.selectedIndex !== null ? this.images[this.selectedIndex] : null;
  }
}
