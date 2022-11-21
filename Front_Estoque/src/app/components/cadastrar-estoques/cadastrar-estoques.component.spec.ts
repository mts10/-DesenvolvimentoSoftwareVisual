import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEstoquesComponent } from './cadastrar-estoques.component';

describe('CadastrarEstoquesComponent', () => {
  let component: CadastrarEstoquesComponent;
  let fixture: ComponentFixture<CadastrarEstoquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEstoquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEstoquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
