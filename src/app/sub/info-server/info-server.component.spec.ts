import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServerComponent } from './info-server.component';

describe('InfoServerComponent', () => {
  let component: InfoServerComponent;
  let fixture: ComponentFixture<InfoServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
