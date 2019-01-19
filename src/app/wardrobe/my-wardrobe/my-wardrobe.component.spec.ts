import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWardrobeComponent } from './my-wardrobe.component';

describe('MyWardrobeComponent', () => {
  let component: MyWardrobeComponent;
  let fixture: ComponentFixture<MyWardrobeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWardrobeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
