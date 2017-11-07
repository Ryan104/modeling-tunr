import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsEditComponent } from './songs-edit.component';

describe('SongsEditComponent', () => {
  let component: SongsEditComponent;
  let fixture: ComponentFixture<SongsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
