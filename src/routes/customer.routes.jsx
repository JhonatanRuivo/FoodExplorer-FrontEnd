import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home/index.jsx'
import { Dish } from '../pages/Dish/index.jsx'
import { Menu } from '../pages/Menu/index.jsx'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  )
}
