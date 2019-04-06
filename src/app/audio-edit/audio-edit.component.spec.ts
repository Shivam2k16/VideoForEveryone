import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioEditComponent } from './audio-edit.component';

describe('AudioEditComponent', () => {
  let component: AudioEditComponent;
  let fixture: ComponentFixture<AudioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
