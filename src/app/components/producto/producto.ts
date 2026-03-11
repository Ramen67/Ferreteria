import { Component, Input } from '@angular/core';
import { Product } from '../../models/producto.model';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [],
  templateUrl: './producto.html',
  styleUrls: ['./producto.css'],
})

export class ProductCardComponent {
  @Input ({required: true}) product!:Product;
}
