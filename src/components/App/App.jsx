import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";

import { selectIsloading } from "../../redux/selectors";
import { refreshUserThunk } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

// import HomePage from "../../pages/HomePage/HomePage";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
import NotFound from "../../pages/NotFound/NotFound";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  const isLoading = useSelector(selectIsloading);

  return isRefreshing ? null : (
    <div>
      {isLoading && <h2>Loading .....</h2>}
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;
