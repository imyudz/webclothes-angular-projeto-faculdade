import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProdutosComponent } from './section-produtos.component';

describe('SectionProdutosComponent', () => {
  let component: SectionProdutosComponent;
  let fixture: ComponentFixture<SectionProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionProdutosComponent]
    });
    fixture = TestBed.createComponent(SectionProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
