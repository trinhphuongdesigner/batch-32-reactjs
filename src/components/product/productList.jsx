import Loading from 'components/loading';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProductsAction } from 'store/product/action';

function ProductList(props) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.productReducer.isLoading);
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <ul>
      {isLoading ? (
        <Loading />
      ) : products.length > 0 ? (
        products.map((item) => {
          return (
            <>
              <li key={item.id}>
                <span>{item.name}: </span>
                <span>{item.price}đ</span>
              </li>
            </>
          );
        })
      ) : (
        <p>Không có sản phẩm</p>
      )}
    </ul>
  );
}

export default ProductList;
