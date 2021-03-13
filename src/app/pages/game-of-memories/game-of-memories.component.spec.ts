import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfMemoriesComponent } from './game-of-memories.component';

describe('GameOfMemoriesComponent', () => {
  let component: GameOfMemoriesComponent;
  let fixture: ComponentFixture<GameOfMemoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOfMemoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOfMemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
