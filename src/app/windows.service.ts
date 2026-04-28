import { Injectable } from '@angular/core';

export type WindowState = 'open' | 'minimized' | 'closed';

@Injectable({
  providedIn: 'root',
})
export class WindowsService {
  aboutWindowState: WindowState = 'closed';
  projectsWindowState: WindowState = 'closed';
  folderWindowState: WindowState = 'closed';
  lumaWindowState: WindowState = 'closed';
  wdwuWindowState: WindowState = 'closed';

  aboutWindowMaximized = false;
  projectsWindowMaximized = false;
  folderWindowMaximized = false;
  lumaWindowMaximized = false;
  wdwuWindowMaximized = false;

  activeWindow: string = '';

  constructor() {}
}
