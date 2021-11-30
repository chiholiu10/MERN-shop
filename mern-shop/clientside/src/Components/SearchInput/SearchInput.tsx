import { FC, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import type { EventTargtProps } from "src/Types/Types";

const SearchInput: FC<SearchInputProps> = () => {
  const searchValue = (event: EventTargtProps) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input type="text" name="search" onChange={searchValue} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  productList: state.reducer.products || [],
  shoppingCart: state.reducer.cart || []
});

const connector = connect(mapStateToProps);
type SearchInputProps = ConnectedProps<typeof connector>;
export default connector(memo(SearchInput));