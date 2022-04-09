import { Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/home/home.routes";
import Navigation from "./routes/navigation/navigation.routes";
import ShopRoute from "./routes/shop/shop.routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeRoute />} />
          <Route path="shop" element={<ShopRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
