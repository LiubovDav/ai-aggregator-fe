import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatStaticGridComponent } from './chat-static-grid.component';

describe('ChatStaticGridComponent', () => {
  let component: ChatStaticGridComponent;
  let fixture: ComponentFixture<ChatStaticGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatStaticGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatStaticGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
