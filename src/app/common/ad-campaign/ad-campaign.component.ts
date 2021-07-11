import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-ad-campaign',
  templateUrl: './ad-campaign.component.html',
  styleUrls: ['./ad-campaign.component.css']
})
export class AdCampaignComponent implements OnInit {
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Tags: Tag[] = [
    {name: 'Tag1'},
    {name: 'Tag2'},
    {name: 'Tag3'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.Tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(Tag: Tag): void {
    const index = this.Tags.indexOf(Tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
