import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// local
import { getProducts } from '../services/productAPIs';
import { Product } from '../components/CenterContent/interface';
import { setProducts as reducerSetProducts } from '../redux/reducers/products';


const useProduct = (subCategoryId: string) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  const fetchProducts = async () => {
    setLoading(true);
    const { result, error } = await getProducts(subCategoryId);
    error && setError(true); // need to update 
    if (result) {
      setProducts(result);
      dispatch(reducerSetProducts(result));
    }

    setLoading(false);
  };

  useEffect(() => {
    setError(false);
    (subCategoryId && !isLoading) && fetchProducts();
  }, [subCategoryId]); // eslint-disable-line no-console

  return { isLoading, isError, products };
}

export default useProduct;