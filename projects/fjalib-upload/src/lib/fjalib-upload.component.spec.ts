import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FjalibUploadComponent } from './fjalib-upload.component';

describe('FjalibUploadComponent', () => {
  let component: FjalibUploadComponent;
  let fixture: ComponentFixture<FjalibUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FjalibUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FjalibUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
