import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./components/Pages/MainPage/MainPage"
import Blog from "./components/Pages/Blog/Blog"
import OneArticle from "./components/Organisms/OneArticle/OneArticle"
import MainLayout from "./Layouts/MainLayout"
import Page404 from "./components/Pages/Page404/Page404"
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:postId" element={<OneArticle />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
