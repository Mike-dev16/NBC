import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNewsComponent } from './aside-news.component';

describe('AsideNewsComponent', () => {
  let component: AsideNewsComponent;
  let fixture: ComponentFixture<AsideNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
