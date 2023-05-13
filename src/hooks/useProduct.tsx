import { useEffect, useState } from 'react';

// local
import { getProducts } from '../services/productAPIs';
import { Product } from '../components/CenterContent/interface';

const useProduct = (subCategoryId: string) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  const fetchProducts = async () => {
    setLoading(true);
    const { result, error } = await getProducts(subCategoryId);
    error && setError(true); // need to update 
    result && setProducts(result)
    setLoading(false);
  };

  useEffect(() => {
    setError(false);
    (subCategoryId && !isLoading) && fetchProducts();
  }, [subCategoryId]); // eslint-disable-line no-console

  return { isLoading, isError, products };
}

export default useProduct;