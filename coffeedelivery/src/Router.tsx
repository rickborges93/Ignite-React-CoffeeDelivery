import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { SuccessOrder } from './pages/SuccessOrder'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CartContextProvider } from './contexts/CartContext'

export function Router() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success-order" element={<SuccessOrder />} />
        </Route>
      </Routes>
    </CartContextProvider>
  )
}
