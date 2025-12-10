import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIlustrationComponent } from './register-ilustration.component';

describe('RegisterIlustrationComponent', () => {
  let component: RegisterIlustrationComponent;
  let fixture: ComponentFixture<RegisterIlustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterIlustrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterIlustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
