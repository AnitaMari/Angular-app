import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-app';
  // paso estas dos líneas a products.component.ts así como la importación de arriba
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle() {
    this.title = 'changed';
  }

  // esto lo paso a products.components.ts que es el responsable ahora de la pág de productos
  // ngOnInit() {
  //   this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
  //   .subscribe((data) => {
  //     this.products = data; //como esto será un array habrá que iterarlo y renderizarlo
  //   })
  // }
}


