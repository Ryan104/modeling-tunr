import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsIndexComponent } from './songs-index.component';

describe('SongsIndexComponent', () => {
  let component: SongsIndexComponent;
  let fixture: ComponentFixture<SongsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
