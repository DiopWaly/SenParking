import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailReservationPage } from './detail-reservation.page';

describe('DetailReservationPage', () => {
  let component: DetailReservationPage;
  let fixture: ComponentFixture<DetailReservationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailReservationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
