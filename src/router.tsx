// router.tsx 或 routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '*', // 匹配所有未定义路径
    element: <ErrorPage />
  }
],
{
    basename: '/my/portal/web' // ⬅️ 这一步很关键
  }
);

export default router;
