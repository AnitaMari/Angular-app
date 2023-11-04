import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { NgOptimizedImage } from '@angular/common'; // esto ya no lo necesitamos aquí. Lo pondríamos en el módulo que lo necesita.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { ProductComponent } from './components/product/product.component';
// import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent,
    // ProductComponent, // estos dos componentes ya no cargarían en el set inicial  
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
//  NgOptimizedImage, // lo pasamos al componente que lo utiliza (product.comp)
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
