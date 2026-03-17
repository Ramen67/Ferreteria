import { Component, computed, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../../models/producto.model';
import { CurrencyPipe } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() add = new EventEmitter<Product>();

  private carritoService = inject(CarritoService);

  stockDisponible = computed(
    () => this.product.stock - this.carritoService.cantidadEnCarrito(this.product.id)
  );

  onAdd() {
    if (this.stockDisponible() <= 0) return;
    this.add.emit(this.product);
  }
}


