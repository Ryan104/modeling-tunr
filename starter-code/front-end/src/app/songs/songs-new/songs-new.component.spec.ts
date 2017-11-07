import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsNewComponent } from './songs-new.component';

describe('SongsNewComponent', () => {
  let component: SongsNewComponent;
  let fixture: ComponentFixture<SongsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
