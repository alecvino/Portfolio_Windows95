import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowProjectsComponent } from './window-projects.component';

describe('WindowProjectsComponent', () => {
  let component: WindowProjectsComponent;
  let fixture: ComponentFixture<WindowProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
