
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IAtleta } from '../model/entity/atleta/Atleta';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mantain-atleta',
  templateUrl: './mantain-atleta.component.html',
  styleUrls: ['./mantain-atleta.component.css']
})
export class MantainAtletaComponent implements OnInit {
  @Input() atleta: IAtleta;
  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
