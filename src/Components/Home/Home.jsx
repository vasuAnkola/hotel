import Featured from "../Featured/Featured"
import FeaturedProperties from "../FeaturedProperties/FeaturedProperties"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import MailLIst from "../MailList/MailLIst"
import Navbar from "../Navbar/Navbar"
import PropertyList from "../PropertyList/PropertyList"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Brows by Property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes Guests Love</h1>
        <FeaturedProperties/>
        <MailLIst/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
