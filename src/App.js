import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"
import Header from './components/Layout/Header';
import Home from "./components/Home/Home"
import Courses from './components/Courses/Courses';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Login from "./components/Auth/Login"
import Footer from "./components/Layout/Footer"
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentFail from "./components/Payments/PaymentFail"
import PaymentSuccess from "./components/Payments/PaymentSuccess"
import NotFound from "./components/Layout/NotFound";
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import DashBoard from './components/Admin/Dashboard/DashBoard';
import AdminCourses from "./components/Admin/AminCourses/AdminCourses"
import Users from "./components/Admin/Users/Users"
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from "protected-route-react";
import Loader from './components/Layout/Loader';

function App() {

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  const { isAuthenticated, user, message, error, loading } = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" })
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

  }, [dispatch, error, message])

  useEffect(() => {
    dispatch(loadUser);
  }, [dispatch])

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/courses' exact element={<Courses />} />

            <Route
              path="/course/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CoursePage user={user} />
                </ProtectedRoute>
              }
            />

            <Route path='/login' exact element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                <Login />
              </ProtectedRoute>
            } />

            <Route path='/register' exact element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/profile">
                <Register />
              </ProtectedRoute>
            } />

            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            <Route path='/contact' exact element={<Contact />} />
            <Route path='/request' exact element={<Request />} />
            <Route path='/about' exact element={<About />} />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />
            <Route path='/paymentfail' exact element={<PaymentFail />} />
            <Route path='/paymentsuccess' exact element={<PaymentSuccess />} />

            <Route path='/profile' exact element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile user={user} />
              </ProtectedRoute>
            } />

            <Route path='/changepassword' exact element={
              <ProtectedRoute isAuthenticated={isAuthenticated} >
                <ChangePassword />
              </ProtectedRoute>
            } />
            <Route path='/updateprofile' exact element={
              <ProtectedRoute isAuthenticated={isAuthenticated} >
                <UpdateProfile />
              </ProtectedRoute>
            } />

            <Route path='*' exact element={<NotFound />} />

            {/* admin Routes         */}
            <Route path='/admin/dashboard' exact element={
              <ProtectedRoute
                adminRoute={true}
                isAuthenticated={isAuthenticated}
                isAdmin={user && user.role === 'admin'}
              >
                <DashBoard />
              </ProtectedRoute>
            } />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  adminRoute={true}
                  isAuthenticated={isAuthenticated}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Users />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />

          <Toaster />
        </>
      )}
    </BrowserRouter>
  )
}

export default App;
