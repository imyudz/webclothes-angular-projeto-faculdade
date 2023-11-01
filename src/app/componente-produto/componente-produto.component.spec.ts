import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProdutoComponent } from './componente-produto.component';

describe('ComponenteProdutoComponent', () => {
  let component: ComponenteProdutoComponent;
  let fixture: ComponentFixture<ComponenteProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteProdutoComponent]
    });
    fixture = TestBed.createComponent(ComponenteProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
