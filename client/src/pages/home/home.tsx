import Footer from "./footer"
import Header from "./header"
import Main from "./main"

const Home = () => {
  return (
    <div style={{scrollSnapType : 'y mandatory', height : '100vh', overflowY : "scroll"}}>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Home