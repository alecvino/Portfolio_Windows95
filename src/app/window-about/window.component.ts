import { CdkDrag } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { WindowsService } from '../windows.service';
import { CommonModule, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-window',
  imports: [NgClass, CommonModule, CdkDrag],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css',
})
export class WindowComponent {
  windowService = inject(WindowsService);

  onClose() {
    this.windowService.aboutWindowState = 'closed';
    console.log('Window closed');
  }

  onMinimize() {
    this.windowService.aboutWindowState = 'minimized';
    console.log('Window minimized');
  }

  constructor(private http: HttpClient) {}

  downloadCV(): void {
    const fileUrl = 'CV_GagelColomer.pdf'; // Replace with your file URL

    this.http.get(fileUrl, { responseType: 'blob' }).subscribe({
      next: (blob) => {
        // Create a temporary link element
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        link.href = url;
        link.download = 'CV_GagelColomer.pdf'; // Suggested filename
        link.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('File download failed:', err);
        alert('Failed to download file.');
      },
    });
  }
}
