import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component';

import { Product } from './../../models/product.model';

@Component({
  standalone: true, // esto es algo experimental de Angular y significa que este componente no pertenece a ningún módulo, y nos evitaríamos la importación en los módulos.
  imports: [ ProductComponent, CommonModule ], // en este componente poner también standalone: true
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      this.products = data; //como esto será un array habrá que iterarlo y renderizarlo
    })
  }
}
