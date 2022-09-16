import { useContext, CSSProperties, useCallback } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  // const [buttonDisabled, setButtonDisabled] = useState(false);

  // useEffect(() => {
  //   setButtonDisabled(false);
  //   if (counter === maxCount) {
  //     setButtonDisabled(true);
  //   }
  // }, [counter]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() && styles.btnDisabled
        }`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
