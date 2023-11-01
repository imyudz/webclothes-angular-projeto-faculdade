import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDesejosComponent } from './section-desejos.component';

describe('SectionDesejosComponent', () => {
  let component: SectionDesejosComponent;
  let fixture: ComponentFixture<SectionDesejosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionDesejosComponent]
    });
    fixture = TestBed.createComponent(SectionDesejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
