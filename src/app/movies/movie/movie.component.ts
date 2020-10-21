import { Component, OnInit } from '@angular/core';
import {Movie} from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  title = "Movie List";
  title2 = "Movie List2";




  ngOnInit(): void {
  }



}
