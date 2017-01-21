
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent } from './list.component';
import { CardComponent } from '../shared/card/card.component';
import { FilterPipe } from '../shared/filter/filter.pipe';
import { CardService } from '../shared/service/card.service';
import { Observable } from "rxjs";

class MockTestService {
  public mockName: string = 'Mocked Service';

  fetch() {
    return Observable.of(
      [{"id":"1455876733254","label":"Go shopping","status":{"identifier":"todo","label":"TODO"}}]
    );
  }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent, CardComponent, FilterPipe ],
      providers: [
        { provide: CardService,  useClass : MockTestService },
        { provide: Router, useValue: true }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 1 todo', fakeAsync(() => {
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelectorAll('todos-card').length).toBe(1);
  }))
  });
