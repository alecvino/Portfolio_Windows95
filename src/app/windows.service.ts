import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowsService {
  openWindow: boolean = false;

  openWindowProjects: boolean = false;

  constructor() {}
}
