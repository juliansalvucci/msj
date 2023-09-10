import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListamensajesComponent } from './listamensajes.component';

describe('ListamensajesComponent', () => {
  let component: ListamensajesComponent;
  let fixture: ComponentFixture<ListamensajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListamensajesComponent]
    });
    fixture = TestBed.createComponent(ListamensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
