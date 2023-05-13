import { Category } from '../components/CenterContent/interface';

export const getCategories = async () => {
  return fetch('https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json')
    .then(response => response.json())
    .then(data => {
      return {
        result: data.result as Category[] || [],
        error: null,
      };
    })
    .catch(error => {
      console.error(error);
      return {
        result: null,
        error: error,
      };
    });
};