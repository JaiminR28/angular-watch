import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWatchComponent } from './stop-watch.component';

describe('StopWatchComponent', () => {
  let component: StopWatchComponent;
  let fixture: ComponentFixture<StopWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopWatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
