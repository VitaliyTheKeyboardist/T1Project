import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./components/Pages/MainPage/MainPage"
import Blog from "./components/Pages/Blog/Blog"
import OneArticle from "./components/Pages/OneArticle/OneArticle"
import "./App.css"
import MainLayout from "./Layouts/MainLayout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article" element={<OneArticle />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
