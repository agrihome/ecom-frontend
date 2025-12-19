import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products as initialProducts } from '@/data/products';

interface Product {
  id: string;
  productName: string;
  rating: number;
  imgUrl: string | any;
  currentPrice: number;
  originalPrice: number;
  reviewCount?: number;
  discountPercent?: number;
  new?: boolean;
}

interface ProductState {
  items: Product[];
  filteredItems: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: initialProducts,
  filteredItems: initialProducts,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredItems = state.items.filter(product => 
        product.productName.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { setProducts, searchProducts } = productSlice.actions;
export default productSlice.reducer;
