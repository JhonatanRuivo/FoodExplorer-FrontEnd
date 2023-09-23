import { Routes, Route } from 'react-router-dom'

import { DishAdmin } from '../pages/DishAdmin'
import { EditDish } from '../pages/EditDish'
import { HomeAdmin } from '../pages/HomeAdmin'
import { MenuAdmin } from '../pages/MenuAdmin'
import { NewDish } from '../pages/NewDish'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/dish" element={<DishAdmin />} />
      <Route path="/menu" element={<MenuAdmin />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit" element={<EditDish />} />
    </Routes>
  )
}
