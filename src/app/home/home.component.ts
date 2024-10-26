import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items = [
    {
      image: '../../assets/Images/Products/image1.jpg',  
      price: '$20',
      available: true,
      rating: 4.5,
      title: 'Product 1'
    },
    {
      image: '../../assets/Images/Products/image2.jpg',
      price: '$35',
      available: false,
      rating: 4.0,
      title: 'Product 2'
    },
    {
      image: '../../assets/Images/Products/image3.jpg',
      price: '$50',
      available: true,
      rating: 5.0,
      title: 'Product 3'
    },
    {
      image: '../../assets/Images/Products/image4.jpg',
      price: '$60',
      available: true,
      rating: 5.0,
      title: 'Product 4'
    },
    {
      image: '../../assets/Images/Products/image5.jpg',
      price: '$60',
      available: true,
      rating: 5.0,
      title: 'Product 5'
    },
    {
      image: '../../assets/Images/Products/image6.jpg',
      price: '$60',
      available: true,
      rating: 5.0,
      title: 'Product 6'
    },
    {
      image: '../../assets/Images/Products/image7.jpg',
      price: '$60',
      available: true,
      rating: 5.0,
      title: 'Product 7'
    },
    {
      image: '../../assets/Images/Products/image8.jpg',
      price: '$60',
      available: true,
      rating: 5.0,
      title: 'Product 8'
    }


  ];
}
