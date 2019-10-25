import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutOfertasComponent } from './put-ofertas.component';

describe('PutOfertasComponent', () => {
  let component: PutOfertasComponent;
  let fixture: ComponentFixture<PutOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
