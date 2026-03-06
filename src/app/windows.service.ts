import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowsService {
  openWindowAbout: boolean = false;
  openWindowProjects: boolean = false;

  activeWindow: string = '';

  constructor() {}
}
