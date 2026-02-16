
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useEffect } from "react";
import Lenis from "lenis";

// pages
import LandingPage from "./pages/LandingPage"

// components
// import Header from "./components/general/header"
import Footer from "./components/general/footer";

function App() {

  useEffect( () => {
      const lenis = new Lenis()

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }, [])

  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: (
        <div className="">
          {/* <Header /> */}
          <div className="">
            <LandingPage />
          </div>
          <Footer />
        </div>
      ),
    },
    {
      path: "*",
      element: <div>Error</div>,
    },
  ], { basename: "/" })

  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
