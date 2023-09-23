import { BrowserRouter } from 'react-router-dom'
import { USER_ROLE } from '../../utils/rotes'
import { useAuth } from '../hooks/auth'

import { CustomerRoutes } from './customer.routes'
import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { user } = useAuth()

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
