import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdwuComponent } from './wdwu.component';

describe('WdwuComponent', () => {
  let component: WdwuComponent;
  let fixture: ComponentFixture<WdwuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WdwuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
