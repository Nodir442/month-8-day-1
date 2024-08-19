import { Route, Routes } from "react-router-dom";
import { MainLoyaut } from "./layout/main-loyaut";
import { Home } from "./pages/home";
import { CreateProduct } from "./pages/createProduct";
import { EditProduct } from "./pages/editProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLoyaut />}>
          <Route index element={<Home />} />
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="editProduct" element={<EditProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
