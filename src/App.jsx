import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeP from "./pages/HomeP";
import ManagerP from "./pages/ManagerP";
import AdminLayout from "./layouts/AdminLayout";
import ArchitectP from "./pages/ArchitectP";
import LaborerP from "./pages/LaborerP";

function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/manager" element={<ManagerP />} />
          <Route path="/cashier" element={<ArchitectP />} />
          <Route path="/client" element={<LaborerP />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}

export default App;