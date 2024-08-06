import { Layout } from './components/Layout/Layout'
import { Outlet } from 'react-router-dom'

export default function App(): JSX.Element {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
