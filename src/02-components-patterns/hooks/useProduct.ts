import { useEffect, useState, useRef } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductsArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  // console.log(initialValues?.count);

  // const isControlled = useRef(!!onChange);

  const increaseBy = (value: number) => {
    // if (isControlled.current) {
    //   return onChange!({ count: value, product });
    // }

    let newValue = Math.max(counter + value, 0);

    //Primera opción
    // if (initialValues?.maxCount) {
    //   if (newValue <= initialValues?.maxCount) {
    //     setCounter(newValue);
    //   } else return;
    // } else setCounter(newValue);

    //Segunda opción
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(counter);
  }, [counter]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
