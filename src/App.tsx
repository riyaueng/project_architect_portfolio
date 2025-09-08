import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./components/layout/Layout"
import Gallery from "./pages/gallery/Gallery"
import Projects from "./pages/projects/Projects"
import Certification from "./pages/certifications/Certification"
import Contacts from "./pages/contacts/Contacts"
import Main from "./pages/main/Main"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certification />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
