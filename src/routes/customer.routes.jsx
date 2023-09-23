import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { Menu } from '../pages/Menu'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish" element={<Dish />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}
