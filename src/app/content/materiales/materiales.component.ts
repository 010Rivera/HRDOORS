import { Component } from '@angular/core';
import { CargarscriptsService } from 'src/app/cargarscripts.service';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent {
  constructor(private cargarscripts: CargarscriptsService){
    cargarscripts.carga([ 
      "./assets/vendor/aos/aos.js",
    "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "./assets/vendor/glightbox/js/glightbox.min.js",
    "./assets/vendor/isotope-layout/isotope.pkgd.min.js",
    "./assets/vendor/swiper/swiper-bundle.min.js",
    "./assets/vendor/php-email-form/validate.js",
    "./assets/js/main.js"
    ])
  }

}
