import { Routes, Route } from 'react-router'
import { Home } from '../pages/home'
import { DefaultLayout } from '../layouts/default-layout'
import { Modality } from '../pages/modality'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="modality/:id" element={<Modality />} />
      </Route>
    </Routes>
  )
}
