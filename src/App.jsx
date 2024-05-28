import React from "react";
import RootLayout from "./components/layout/RootLayout";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import SigningPage from "./pages/SigningPage";
import LoginPage from "./pages/LoginPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
      <Route path="/signup" element={<RootLayout />}>
        <Route index element={<SigningPage/>}></Route>
      </Route>
      <Route path="/Login" element={<RootLayout />}>
        <Route index element={<LoginPage/>}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
