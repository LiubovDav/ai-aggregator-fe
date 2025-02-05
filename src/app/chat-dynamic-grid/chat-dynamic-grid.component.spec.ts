import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDynamicGridComponent } from './chat-dynamic-grid.component';

describe('ChatDynamicGridComponent', () => {
  let component: ChatDynamicGridComponent;
  let fixture: ComponentFixture<ChatDynamicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatDynamicGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatDynamicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
