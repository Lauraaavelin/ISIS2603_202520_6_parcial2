import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlbumesComponent } from './Albumes/Albumes.component';
import { CancionesComponent } from './Canciones/Canciones.component';
import { ServiceService } from './Service.service';

@NgModule({
  declarations: [		AppComponent,
      AlbumesComponent,
      CancionesComponent,
   ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
