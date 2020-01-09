import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSampleComponent } from './design-sample.component';

describe('DesignSampleComponent', () => {
  let component: DesignSampleComponent;
  let fixture: ComponentFixture<DesignSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
