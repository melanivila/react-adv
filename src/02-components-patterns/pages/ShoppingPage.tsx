import {
  ProductImage,
  ProductButtons,
  ProductTitle,
  ProductCard,
} from "../components/index";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Forma 1 */}
        <ProductCard product={product}>
          <ProductImage />

          <ProductTitle />

          <ProductButtons />
        </ProductCard>
        {/* Forma 2 */}
        <ProductCard product={product}>
          <ProductCard.Image />

          <ProductCard.Title />

          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
