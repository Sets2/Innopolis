import './App.scss';
import './scss/_fonts.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageIndex from "./Pages/PageIndex/PageIndex";
import PageProduct from './Pages/PageProduct/PageProduct';
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="container-app font">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageIndex />} />
          {/* Параметр path указываем по какому адресу будут доступна эта страница */}
          <Route path="/product" element={<PageProduct />} />
          {/* Если человек ввел другой адрес, то показываем страницу 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


