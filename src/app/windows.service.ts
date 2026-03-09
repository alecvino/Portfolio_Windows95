import { Injectable } from '@angular/core';

export type WindowState = 'open' | 'minimized' | 'closed';

@Injectable({
  providedIn: 'root',
})
export class WindowsService {
  aboutWindowState: WindowState = 'closed';
  projectsWindowState: WindowState = 'closed';

  activeWindow: string = '';

  constructor() {}
}
