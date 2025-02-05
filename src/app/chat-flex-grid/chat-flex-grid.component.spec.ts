import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFlexGridComponent } from './chat-flex-grid.component';

describe('ChatFlexGridComponent', () => {
  let component: ChatFlexGridComponent;
  let fixture: ComponentFixture<ChatFlexGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatFlexGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFlexGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
