import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcviewComponent } from './dbcview.component';

describe('DbcviewComponent', () => {
  let component: DbcviewComponent;
  let fixture: ComponentFixture<DbcviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbcviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
