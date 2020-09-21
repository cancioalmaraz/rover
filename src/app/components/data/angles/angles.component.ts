import { Component, OnInit } from '@angular/core';
import $ from 'node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-angles',
  templateUrl: './angles.component.html',
  styleUrls: ['./angles.component.css']
})
export class AnglesComponent implements OnInit {

  constructor() {
    const id = setInterval(() => {
      $(() => {
          $.getJSON('assets/data.json', (data: any) => {
            try {
              document.getElementById('pitch-angle').innerHTML = data.Pitch;
            } catch (error) {
              clearInterval(id);
            }
          });
      });
    }, 1000);
  }

  ngOnInit(): void {
  }

}
