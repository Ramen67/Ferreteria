import { Component, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../models/producto.model';
import { ProductsService } from '../../services/producto.service';
import { ProductCardComponent } from '../product-card/product-card';
import { Carrito } from '../carrito/carrito';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent, Carrito],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'],
})
export class CatalogoComponent {
  products = signal<Product[]>([]);
  inStockCount = computed(()=>this.products().filter(p=>p.inStock).length);
  constructor(private productsService: ProductsService,
              private carritoService: CarritoService ) {
    this.productsService.getAll().subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error('Error cargando XML:', err),
    });
  }
  agregar(producto:Product){
    this.carritoService.agregar(producto);
  }
}
