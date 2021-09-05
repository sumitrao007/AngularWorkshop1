import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystyleComponent } from './mystyle.component';

describe('MystyleComponent', () => {
  let component: MystyleComponent;
  let fixture: ComponentFixture<MystyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
