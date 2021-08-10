import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditRequestComponent } from './app-edit-request.component';

describe('AppEditRequestComponent', () => {
  let component: AppEditRequestComponent;
  let fixture: ComponentFixture<AppEditRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEditRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
