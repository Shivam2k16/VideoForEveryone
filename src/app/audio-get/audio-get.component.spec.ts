import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioGetComponent } from './audio-get.component';

describe('AudioGetComponent', () => {
  let component: AudioGetComponent;
  let fixture: ComponentFixture<AudioGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
