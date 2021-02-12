import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImprimeReservationPage } from './imprime-reservation.page';

describe('ImprimeReservationPage', () => {
  let component: ImprimeReservationPage;
  let fixture: ComponentFixture<ImprimeReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImprimeReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
