import { Component } from '@angular/core';

@Component({
  selector: 'mp-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  products: any[] = [
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0012',
      'releaseDate': 'March 18, 2018',
      'description': 'Test product description',
      'price': 22.33,
      'starRating': 2.4,
      'imageUrl': 'https://media.tractorsupply.com/is/image/TractorSupplyCompany/3599008?$456$'
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor() { }

}
