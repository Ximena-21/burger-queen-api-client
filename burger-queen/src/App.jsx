import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./AppStyles.scss";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { ViewOrders } from "./components/Waiter/ViewOrders/ViewOrders";
import { ProductsProvider } from "./context/ProductsContext";
import { UsersProvider } from "./context/UsersContext";
import { WaiterProvider } from "./context/WaiterContext";
import { Login } from "./pages/login/Login";
import { Products } from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";
import { TakesOrder } from "./pages/Waiter/TakesOrder/TakesOrder";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/*" element={
           < ProtectedRoute avaliableRole={'admin'} redirect={'/takes-orders'}>
              <ProductsProvider>
                <Products />
              </ProductsProvider>
          </ProtectedRoute>
          } />
          <Route path="/users/*" element={
           < ProtectedRoute avaliableRole={'admin'} redirect={'/takes-orders'}>
              <UsersProvider>
                <Users />
              </UsersProvider>
          </ProtectedRoute>
          } />
          <Route exact path="/takes-orders" element={
          //  < ProtectedRoute avaliableRole={'meser@'} redirect={'/products'}>
            <WaiterProvider>
                <TakesOrder />
            </WaiterProvider>
          // {/* </ProtectedRoute> */}
          } />
            <Route exact path="/view-orders" element={
          //  < ProtectedRoute avaliableRole={'meser@'} redirect={'/products'}>
            <WaiterProvider>
                <ViewOrders />
            </WaiterProvider>
          // {/* </ProtectedRoute> */}
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
