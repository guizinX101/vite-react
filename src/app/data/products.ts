import iemanja from './imgs/iemanja.png';
import oxum from './imgs/oxum.png';
import iansa from './imgs/iansa.png';
import padilha from './imgs/pombagira.png';
import pombagira from './imgs/pombagira1.png';
import pretovelho from './imgs/pretovelho.png';
import trancarua from './imgs/exutrancarua.png';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Guia de Iemanjá',
    price: 19.90,
    image: iemanja,
    category: 'velas',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Guia de Oxum',
    price: 17.50,
    image: oxum,
    category: 'incensos',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Guia de Preto Velho',
    price: 45.00,
    image: pretovelho,
    category: 'guias',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Guia de Iansã',
    price: 89.90,
    image: iansa,
    category: 'imagens',
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Guia de Maria Padilha',
    price: 35.00,
    image: padilha,
    category: 'ervas',
    inStock: true,
  },
  {
    id: '6',
    name: 'Guia de Pomba Gira',
    price: 18.00,
    image: pombagira,
    category: 'pemba',
    inStock: true,
  },
  {
    id: '7',
    name: 'Guia de Exu Tranca Rua',
    price: 15.90,
    image: trancarua,
    category: 'velas',
    inStock: true,
  },
];
