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
  variants?: ProductVariant[];
  productImages?: string[];
  productId: string;
  currency: {
    type: string;
    symbol: string;
  };
  priceTerms: string;
}

export interface ProductVariant {
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

export interface CartProduct {
  productId: string;
  variantId: string;
  itemDescription: string;
  colorDescription: string;
  quantity: number;
  grossPrice: string;
  currencySymbol: string;
  productImage?: string;
}
