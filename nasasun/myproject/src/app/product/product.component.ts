import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  all_products: {
    id: number,
    name: string,
    price: number
  }[] = [];

  constructor(private _productService: ProductService) { }

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    price: new FormControl(0, [
      Validators.required,
    ])
  })

  onSubmit() {
    console.log(this.form.value);
    return this._productService.addNewProduct(this.form.value).subscribe(
      (reponse) => {
        console.log("added okay");
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit() {
    return this._productService.getAllProducts().subscribe(
      (value) => {
        // return this.all_products.push(value);
        return this.all_products = value;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
