import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoARpComponent } from './logo-arp.component';

describe('LogoARpComponent', () => {
  let component: LogoARpComponent;
  let fixture: ComponentFixture<LogoARpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoARpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoARpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
