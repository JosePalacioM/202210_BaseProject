/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service';
import { faker } from '@faker-js/faker';


describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;
  let cafe: Array<Cafe> = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      imports: [HttpClientModule],
      providers: [ CafeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    cafe = [];

  for (let i=0; i<3; i++){
    cafe.push(
      new Cafe(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    );
  }
  component.cafes = cafe;

  fixture.detectChanges();
  debug = fixture.debugElement;
});


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba para 3 cafes', () =>{
    expect(component.cafes.length).toEqual(3);
  });

  it("Existe una tabla", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

});
