import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../Album';

@Component({
  selector: 'app-Canciones',
  templateUrl: './Canciones.component.html',
  styleUrls: ['./Canciones.component.css']
})
export class CancionesComponent implements OnInit {

    @Input() album: Album | any = null;
  constructor() { }

  ngOnInit() {
  }

}
