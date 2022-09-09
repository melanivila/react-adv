import { createContext, ReactElement, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { ProductsContextProps, Product } from "../interfaces/interfaces";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductsContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
