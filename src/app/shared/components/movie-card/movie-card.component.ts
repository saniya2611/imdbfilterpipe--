import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../../model/interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  search !: string;
  @Input() property : any
  @Input() propertyBinding !: Array<Imovies>
  constructor() { }

  ngOnInit(): void {
    console.log(this.property);
    console.log(this.propertyBinding);
    
    
  }

}
