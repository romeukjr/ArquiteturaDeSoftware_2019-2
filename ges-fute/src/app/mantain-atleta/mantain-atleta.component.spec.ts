import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantainAtletaComponent } from './mantain-atleta.component';

describe('MantainAtletaComponent', () => {
  let component: MantainAtletaComponent;
  let fixture: ComponentFixture<MantainAtletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantainAtletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantainAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
