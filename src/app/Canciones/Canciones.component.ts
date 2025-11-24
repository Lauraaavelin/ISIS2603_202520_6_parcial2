import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../Album';
import { ServiceService } from '../Service.service';

@Component({
  selector: 'app-Canciones',
  templateUrl: './Canciones.component.html',
  styleUrls: ['./Canciones.component.css']
})
export class CancionesComponent implements OnInit {

    @Input() album: Album | any = null;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  toggleTrack(track: any) {
  track.loved = !track.loved;
  this.service.marcarComoAmadaCancion(track.id);
}

}
