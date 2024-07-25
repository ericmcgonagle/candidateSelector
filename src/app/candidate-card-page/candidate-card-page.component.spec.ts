import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateCardPageComponent } from './candidate-card-page.component';

describe('CandidateCardPageComponent', () => {
  let component: CandidateCardPageComponent;
  let fixture: ComponentFixture<CandidateCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateCardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
