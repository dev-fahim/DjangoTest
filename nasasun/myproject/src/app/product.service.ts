import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { POSTProduct } from './models/product_model';

const SERVER_URL = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllProducts() {
    return this._http.get(SERVER_URL + 'product/all_products/').pipe(
      map(
        (value: {
          id: number,
          name: string,
          price: number
        }[]) => {
          return value;
        }
      )
    );
  }

  addNewProduct(payloads: POSTProduct) {
    return this._http.post(SERVER_URL + 'product/create_new/', payloads);
  }
}
