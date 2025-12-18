# Redux Toolkit Setup for Next.js

This project uses Redux Toolkit for state management with Next.js App Router.

## Structure

```
lib/redux/
├── store.ts              # Redux store configuration
├── hooks.ts              # Typed Redux hooks
├── StoreProvider.tsx     # Provider component for Next.js
└── features/
    └── cartSlice.ts      # Example cart slice
```

## Usage

### 1. Using Redux Hooks

Import the typed hooks from `lib/redux/hooks.ts`:

```typescript
"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/features/cartSlice";

export default function MyComponent() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: "1",
        name: "Product",
        price: 29.99,
        quantity: 1,
      })
    );
  };

  return (
    <div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <p>Cart has {cartItems.length} items</p>
    </div>
  );
}
```

### 2. Creating a New Slice

Create a new file in `lib/redux/features/`:

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyState {
  value: number;
}

const initialState: MyState = {
  value: 0,
};

const mySlice = createSlice({
  name: "myFeature",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = mySlice.actions;
export default mySlice.reducer;
```

Then add it to the store in `lib/redux/store.ts`:

```typescript
import myFeatureReducer from "./features/mySlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      myFeature: myFeatureReducer, // Add your new reducer here
    },
  });
};
```

### 3. Async Actions with Thunks

For async operations, use `createAsyncThunk`:

```typescript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("/api/products");
  return response.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
```

## Important Notes

- **Client Components**: Components using Redux hooks must be client components (use `'use client'` directive)
- **Type Safety**: Always use the typed hooks (`useAppDispatch`, `useAppSelector`) instead of the plain ones
- **Server Components**: You cannot use Redux hooks in server components. For server-side data, use Next.js data fetching methods

## Example Component

See `components/CartExample.tsx` for a complete working example.

## Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Next.js with Redux](https://redux-toolkit.js.org/usage/nextjs)
