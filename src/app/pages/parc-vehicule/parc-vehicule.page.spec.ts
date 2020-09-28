import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParcVehiculePage } from './parc-vehicule.page';

describe('ParcVehiculePage', () => {
  let component: ParcVehiculePage;
  let fixture: ComponentFixture<ParcVehiculePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcVehiculePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParcVehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
