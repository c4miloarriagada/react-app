import { Props  as ProductButtonsProps} from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { PropsImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProducTitle';



export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}


export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps) : JSX.Element,
  Title: (Props: ProductTitle) => JSX.Element
  Image: (Props: PropsImage) => JSX.Element
  Buttons: ({className}: ProductButtonsProps) => JSX.Element
}