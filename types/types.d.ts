declare interface Food {
  id: number;
  title: string;
  price: number;
  image1: string;
  image2: string;
  image3: string;
  category: string;
  description: string;
  reviews: Review[];
}

declare interface FoodDetail extends Food {
  related: Food[]
}

declare interface CartItem extends Food {
  quantity: number;
  totalPrice: number;
}

declare interface Testimonial {
  id: number;
  author: string;
  image: string;
  content: string;
}

declare interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
}

declare interface Review {
  id: string;
  author: string;
  email: string;
  content: string;
}
