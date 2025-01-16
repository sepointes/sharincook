import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomepageComponent } from './blog-homepage.component';

describe('BlogHomepageComponent', () => {
  let component: BlogHomepageComponent;
  let fixture: ComponentFixture<BlogHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
