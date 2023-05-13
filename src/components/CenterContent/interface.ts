export interface Category {
  categoryName: string;
  categoryImageURL: string;
  categoryId: string;
};

export interface SubCategory {
  subCategoryName: string;
  subCategoryImageURL: string;
  categoryId: string;
  subCategoryId: string;
}

export interface Product {
  companyUserCode: string;
  categoryId: string;
  subCategoryId: string;
  itemNumber: string;
  itemDescription: string;
  expiryPeriod: string;
  variants?: (VariantsEntity)[] | null;
  productImages?: string[] | null;
  productId: string;
  currency: Currency;
  priceTerms: string;
}
interface VariantsEntity {
  _id: string;
  bpCatalogNumber: string;
  colorCode: string;
  colorDescription: string;
  packingCode: string;
  packingDescription: string;
  saleDescription: string;
  variantId: string;
  grossPrice: string;
}
interface Currency {
  type: string;
  symbol: string;
}
