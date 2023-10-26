import { Routes, Route } from 'react-router-dom'

import { DishAdmin } from '../pages/DishAdmin/index.jsx'
import { EditDish } from '../pages/EditDish/index.jsx'
import { HomeAdmin } from '../pages/HomeAdmin/index.jsx'
import { MenuAdmin } from '../pages/MenuAdmin/index.jsx'
import { NewDish } from '../pages/NewDish/index.jsx'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/dish/:id" element={<DishAdmin />} />
      <Route path="/menu" element={<MenuAdmin />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
    </Routes>
  )
}
