import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingNewsComponent } from './scrolling-news.component';

describe('ScrollingNewsComponent', () => {
  let component: ScrollingNewsComponent;
  let fixture: ComponentFixture<ScrollingNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
