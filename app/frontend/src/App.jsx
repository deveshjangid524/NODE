import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Home, Auth, Orders, Tables, Menu } from './pages'
import Header from './components/shared/Header'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];
  const {isAuth } = useSelector(state => state.user);
  return (
    <div>

      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/auth" element={isAuth ? <Navigate to="/"/>:<Auth/>} />
        <Route
          path="/orders"
          element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/tables"
          element={
            <ProtectedRoutes>
              <Tables />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoutes>
              <Menu />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>


    </div>
  )
}

function ProtectedRoutes({ children }) {
  const { isAuth } = useSelector(state => state.user);
  if (!isAuth) {
    return <Navigate to="/auth" />
  }

  return children;
}

const App = () => {

  return (

    <Router>
      <Layout />
    </Router>

  )

}

export default App
