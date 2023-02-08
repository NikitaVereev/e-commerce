import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart/cart-slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type TypeRootState = ReturnType<typeof rootReducer>
