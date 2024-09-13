import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ItemLists from '../pages/ItemList';
import ItemCreate from '../pages/ItemCreate';
import ItemEdit from '../pages/ItemEdit';
import ItemDetail from '../pages/ItemDetail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="items">
            <Route index element={<ItemLists />} />
            <Route path="create" element={<ItemCreate />} />
            <Route path="edit/:id" element={<ItemEdit />} />
            <Route path=":id" element={<ItemDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
