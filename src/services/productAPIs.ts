import { Category, Product, SubCategory } from '../components/CenterContent/interface';

export const getCategories = async () => {
  return fetch('https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json')
    .then(response => response.json())
    .then(data => {
      return {
        result: data.result as Category[] || [],
        error: null,
      };
    })
    .catch(catchError);
};

export const getSubCategories = async (categoryId: string) => {
  return fetch(`https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${categoryId}.json`)
    .then(response => response.json())
    .then(data => {
      return {
        result: data.result as SubCategory[] || [],
        error: null,
      };
    })
    .catch(catchError);
};

export const getProducts = async (subCategoryid: string) => {
  return fetch(`https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${subCategoryid}.json`)
    .then(response => response.json())
    .then(data => {
      return {
        result: data.result as Product[] || [],
        error: null,
      };
    })
    .catch(catchError);
};

const catchError = (error: unknown) => {
  console.error(error);
  return {
    result: null,
    error: error,
  };
}