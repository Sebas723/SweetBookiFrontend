import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIlustrationComponent } from './login-ilustration.component';

describe('LoginIlustrationComponent', () => {
  let component: LoginIlustrationComponent;
  let fixture: ComponentFixture<LoginIlustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginIlustrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginIlustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
