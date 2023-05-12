import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Browse from './pages/browse/Browse';
import './scss/style.scss'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import PageNotFound from './pages/404/PageNotFound'

export default function App() {
  const { currentUser } = useContext(AuthContext)

  // const RequireAuth = ({ Children }) => {
  //   return currentUser ? (Children) : <Navigate to='/login' />
  // }

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/Login'
          element={<Login />} />
        <Route
          path='/signup'
          element={<Signup />}
        />
        <Route
          path='/browse'
          element={
            currentUser ? <Browse /> : <Navigate to='/login' />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
