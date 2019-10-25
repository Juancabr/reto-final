import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertOfertasComponent } from './insert-ofertas.component';

describe('InsertOfertasComponent', () => {
  let component: InsertOfertasComponent;
  let fixture: ComponentFixture<InsertOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
