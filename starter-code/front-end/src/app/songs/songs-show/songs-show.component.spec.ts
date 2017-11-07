import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsShowComponent } from './songs-show.component';

describe('SongsShowComponent', () => {
  let component: SongsShowComponent;
  let fixture: ComponentFixture<SongsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
