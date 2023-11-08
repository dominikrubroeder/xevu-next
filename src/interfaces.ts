export interface Variant {
  id: number;
  option: string;
  price: number;
  stock: number;
  description?: string;
}

interface Attribute {
  key: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  variants: Variant[];
  images: string[];
  stock: number;
  isAvailable: boolean;
  manufacturer: string;
  category: string;
  isNew: boolean;
  attributes: Attribute[];
  rating: 1 | 2 | 3 | 4 | 5;
}
