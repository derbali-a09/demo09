import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisteursComponent } from './utilisteurs.component';

describe('UtilisteursComponent', () => {
  let component: UtilisteursComponent;
  let fixture: ComponentFixture<UtilisteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisteursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
