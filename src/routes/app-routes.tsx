import { Routes, Route } from 'react-router'
import { Home } from '../pages/home'
import { DefaultLayout } from '../layouts/default-layout'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
