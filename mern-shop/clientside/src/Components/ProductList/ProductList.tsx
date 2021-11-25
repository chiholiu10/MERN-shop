import { connect } from "react-redux";
import { FC, memo } from "react";
import type { ConnectedProps } from "react-redux";

export const ProductList: FC<ProductListProps> = ({ productList }) => {

  return (
    <div>Products
      {productList?.map((item: any) => {
        console.log(item);
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price.currency}</p>
            <p>{item.price.current.value.text}</p>
            <img src={`//${item.imageUrl}`} alt={item.brandName} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  productList: state.reducer.products
});
const connector = connect(mapStateToProps);
type ProductListProps = ConnectedProps<typeof connector>;
export default connector(memo(ProductList));