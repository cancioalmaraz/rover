import { Component, OnInit } from '@angular/core';
import $ from 'node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styles: [
  ]
})
export class GpsComponent implements OnInit {

  constructor() {
    const id = setInterval(() => {
        $(() => {
            $.getJSON('assets/data.json', (data: any) => {
              try {
                document.getElementById('data-gps').innerHTML = data.Numero;
              } catch (error) {
                clearInterval(id);
              }
            });
        });
    }, 1000);
  }

  ngOnInit(): void {}

}
