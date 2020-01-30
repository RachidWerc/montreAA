import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontrecompComponent } from './montrecomp.component';

describe('MontrecompComponent', () => {
  let component: MontrecompComponent;
  let fixture: ComponentFixture<MontrecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontrecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontrecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
