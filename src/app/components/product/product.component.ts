import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // @Input() title: string = ''; //importar mejor la interfaz del producto y pasarle el objeto completo para que tenga un estado inicial. Así lo inicializaríamos:
  // @Input() product: Product = {
  //   title: '',
  //   price: 0,
  //   images: [],
  //   id: 0
  // };

  //o lo inicializamos así sin pasarle nada (no lo inicializamos en realidad): (Con el símbolo ! le decimos que no se preocupe por esto porque en algún momento se lo vamos a enviar.)
  @Input() product!: Product;


}
