import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { DishAdmin } from '../pages/DishAdmin'
import { EditDish } from '../pages/EditDish'
import { HomeAdmin } from '../pages/HomeAdmin'
import { MenuAdmin } from '../pages/MenuAdmin'
import { NewDish } from '../pages/NewDish'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/dishadmin" element={<DishAdmin />} />
      <Route path="/menuadmin" element={<MenuAdmin />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editdish" element={<EditDish />} />
    </Routes>
  )
}
