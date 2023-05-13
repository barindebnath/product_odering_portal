import { useEffect, useState } from 'react';

// local
import { getCategories } from '../services/productAPIs';
import { Category } from '../components/CenterContent/interface';


const useCategory = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [categories, setCategories] = useState<Category[] | undefined>(undefined);

  const fetchCategories = async () => {
    setLoading(true);
    const { result, error } = await getCategories();
    error && setError(error); // need to update 
    result && setCategories(result)
    setLoading(false);
  };

  useEffect(() => {
    setError(false);
    (!categories && !isLoading) && fetchCategories();
  }, []); // eslint-disable-line no-console

  return { isLoading, isError, categories };
}

export default useCategory;