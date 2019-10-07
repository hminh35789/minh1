import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatkhauComponent } from './matkhau.component';

describe('MatkhauComponent', () => {
  let component: MatkhauComponent;
  let fixture: ComponentFixture<MatkhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatkhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
