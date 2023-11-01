import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDropdownComponent } from './componente-dropdown.component';

describe('ComponenteDropdownComponent', () => {
  let component: ComponenteDropdownComponent;
  let fixture: ComponentFixture<ComponenteDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteDropdownComponent]
    });
    fixture = TestBed.createComponent(ComponenteDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
