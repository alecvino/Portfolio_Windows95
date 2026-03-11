import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowFolderComponent } from './window-folder.component';

describe('WindowFolderComponent', () => {
  let component: WindowFolderComponent;
  let fixture: ComponentFixture<WindowFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowFolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
