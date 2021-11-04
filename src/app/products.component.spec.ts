import { TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductsComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'products-module'`, () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('products-module');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('products-module app is running!');
  });
});
