import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickmenuComponent } from './quickmenu.component';

describe('QuickmenuComponent', () => {
  let component: QuickmenuComponent;
  let fixture: ComponentFixture<QuickmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
