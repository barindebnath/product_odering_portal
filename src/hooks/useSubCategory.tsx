import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// local
import { getSubCategories } from '../services/productAPIs';
import { SubCategory } from '../components/CenterContent/interface';
import { setSubCategories as reducerSetSubCategories } from '../redux/reducers/subCategories';

const useSubCategory = (categoryId: string) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [subCategories, setSubCategories] = useState<SubCategory[] | undefined>(undefined);

  const fetchSubCategories = async () => {
    setLoading(true);
    const { result, error } = await getSubCategories(categoryId);
    error && setError(true); // need to update 
    if (result) {
      setSubCategories(result);
      dispatch(reducerSetSubCategories(result));
    }

    setLoading(false);
  };

  useEffect(() => {
    setError(false);
    (categoryId && !isLoading) && fetchSubCategories();
  }, [categoryId]); // eslint-disable-line no-console

  return { isLoading, isError, subCategories };
}

export default useSubCategory;