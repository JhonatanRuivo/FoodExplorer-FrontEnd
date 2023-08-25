import { Routes, Route } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { Menu } from '../pages/Menu'
import { DishAdmin } from '../pages/DishAdmin'
import { EditDish } from '../pages/EditDish'
import { HomeAdmin } from '../pages/HomeAdmin'
import { MenuAdmin } from '../pages/MenuAdmin'
import { NewDish } from '../pages/NewDish'

export function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      {user.isAdmin === 0 ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/dish" element={<Dish />} />
          <Route path="/menu" element={<Menu />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomeAdmin />} />
          <Route path="/dish" element={<DishAdmin />} />
          <Route path="/menu" element={<MenuAdmin />} />
          <Route path="/new" element={<NewDish />} />
          <Route path="/edit" element={<EditDish />} />
        </>
      )}
    </Routes>
  )
}

// ;<Routes>
//   <Route path="/" element={<Home />} />
//   {user.is_admin === 0 ? (
//     <>
//       <Route path="/new" element={<Home />} />
//     </>
//   ) : (
//     <>
//       <Route path="/edit/:id" element={<Edit />} />
//       <Route path="/new" element={<New />} />
//     </>
//   )}
//   <Route path="/details/:id" element={<Details />} />
// </Routes>
