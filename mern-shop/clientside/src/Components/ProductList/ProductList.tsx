import { FC, memo } from "react";
import type { ItemsProps } from "../../Types/Types";
import { addToCart, decrement, increment } from "../../Actions";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { ProductBlock, ProductBlockInfo, ProductBlockWrap } from "./Product.styles";
import { countReset } from "console";

const ProductList: FC<ProductListProps> = ({ productList, shoppingCart }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Products</div>

      <ProductBlock>
        {productList?.map((item: ItemsProps, index: number) => {
          return (
            <ProductBlockWrap key={index}>
              <ProductBlockInfo>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                {/* <p>{item.rating.rate}</p> */}
                {/* <p>{item.rating.count}</p> */}
              </ProductBlockInfo>
              <img src={`${item.image}`} alt={item.title} />
              <button type="button" onClick={() => dispatch(increment(item.id))} >+</button>
              <button type="button" onClick={() => dispatch(decrement(item.id))} >-</button>

              <p><span>Quantity</span>{item.quantity}</p>
              <button onClick={() => dispatch(addToCart(item, item.id))}>Add to Bag</button>
            </ProductBlockWrap>
          );
        })}
      </ProductBlock>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  productList: state.reducer.products || [],
  shoppingCart: state.reducer.cart || []
});

const connector = connect(mapStateToProps);
type ProductListProps = ConnectedProps<typeof connector>;
export default connector(memo(ProductList));

