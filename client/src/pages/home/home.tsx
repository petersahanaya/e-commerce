import { lazy } from "react"
const Footer = lazy(() => import("./footer"))
const Header = lazy(() => import("./header"))
const Main = lazy(() => import("./main"))

const Home = () => {
  return (
    <div >
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Home