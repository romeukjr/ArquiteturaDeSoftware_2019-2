import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtletaComponent } from './list-atleta.component';

describe('ListAtletaComponent', () => {
  let component: ListAtletaComponent;
  let fixture: ComponentFixture<ListAtletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAtletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
