import { useEffect, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom"
import Option from "../../component/option"
import Footer from "../home/footer"
import { ProfileContainer } from "./profile.styled"

const Profile = () => {
    const [option, setOption] = useState(false);
    const status = [
    {title : '🤫 Busy'},{title : '🤖 Ai'}, {title:'🖥️ Design'}
    ];
    const navigate = useNavigate()

  return (
    <>
    <ProfileContainer>
        <header>
        <Link to='/'>
                <IoIosArrowBack/>
        </Link>
        <h4>My Profile</h4>
        <button onClick={() => setOption(prev => !prev)}
        onBlur={() => setOption(false)}
        >
            <BsThreeDotsVertical/>
        </button>

        {option && <Option/>}
        </header>
        <main>
            <img src={'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png'} alt='img'/>
            <div>
                <h4>Harry Wells</h4>
                <p>Front End Dev</p>
            </div>
        </main>

        <footer>
            <main>
            <p>My Status</p>
            </main>
            <nav >
            {status.map((s, i) => (
                <section key={i}>
                    <p>{s.title}</p>
                </section>
            ))}
            </nav>
        </footer>

        <nav>
            <p>Dashboard</p>
            <section>
                <img src="https://img.icons8.com/color/344/paid.png" alt="payment" />
                <p>Payments</p>
            </section>
        </nav>
    </ProfileContainer>

    <Footer/>
    </>
  )
}

export default Profile