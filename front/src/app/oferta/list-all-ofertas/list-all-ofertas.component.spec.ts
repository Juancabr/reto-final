import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllOfertasComponent } from './list-all-ofertas.component';

describe('ListAllOfertasComponent', () => {
  let component: ListAllOfertasComponent;
  let fixture: ComponentFixture<ListAllOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
