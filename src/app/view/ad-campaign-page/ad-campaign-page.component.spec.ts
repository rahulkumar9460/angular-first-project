import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCampaignPageComponent } from './ad-campaign-page.component';

describe('AdCampaignPageComponent', () => {
  let component: AdCampaignPageComponent;
  let fixture: ComponentFixture<AdCampaignPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCampaignPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCampaignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
