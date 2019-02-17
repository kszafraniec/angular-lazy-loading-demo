import { Component, OnInit } from '@angular/core';
import {loremIpsum} from './5mb_lorem_ipsum';

@Component({
  selector: 'app-lorem-ipsum',
  templateUrl: './lorem-ipsum.component.html',
  styleUrls: ['./lorem-ipsum.component.css']
})
export class LoremIpsumComponent implements OnInit {
  text: string;

  ngOnInit() {
    this.text = loremIpsum;
  }
}
