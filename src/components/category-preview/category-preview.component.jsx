import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  PreviewItems,
  PreviewTitle,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <PreviewTitle to={title}>{title.toUpperCase()}</PreviewTitle>
      </h2>
      <PreviewItems>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </PreviewItems>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
