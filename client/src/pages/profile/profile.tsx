import React, { ChangeEvent, lazy, useEffect, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiFillCamera  } from 'react-icons/ai'
import { BsCheckLg  } from 'react-icons/bs'
import { IoIosArrowBack } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom"
import Option from "../../component/option"
const Footer = lazy(() => import("../home/footer"))
import { ProfileContainer } from "./profile.styled"

interface UserDataProps {
    user :  {
        username : string,
        email : string,
        profile : string
    }
}

const Profile = () => {
    const defaultProfile = 'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png'
    const [option, setOption] = useState(false);
    const [profile, setProfile] = useState(defaultProfile);
    const [files, setFiles] = useState<any>(null)
    const [datas, setDatas] = useState({} as UserDataProps);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleFile = (e : ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files !
        setFiles(files[0])
    }

    useEffect(() => {
        if(!error){
            const token = localStorage.getItem("TOKEN");
            if(!token) return setError(true);

            fetch('https://motionless-tick-top-coat.cyclic.app/token/check', {
                method : "GET",
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            }).then(res => {
                if(!res.ok) return setError(true);
                setError(false)
            }).catch(err => {
                setError(true);
            });

            fetch('https://motionless-tick-top-coat.cyclic.app/user/profile', {
                method : "GET",
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            }).then(async (res) => { 
                const data = await res.json();
                setDatas(data)
            })
        }

        if(error) return navigate('/register')
    }, [error, localStorage.getItem("TOKEN")])  

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    const formData = new FormData();

    formData.append('file', files, files['name'])

    fetch('https://motionless-tick-top-coat.cyclic.app/profile', {
        method : "POST",
        headers : {
            Authorization : `Bearer ${localStorage.getItem("TOKEN")}`
        },
        body : formData
    }).then((res) => {
        if(res.status != 200) return setProfile(defaultProfile)

        const newProfile = URL.createObjectURL(files!)
        setFiles(null)
        setProfile(newProfile)
    }).catch(err => {
        setProfile(defaultProfile)
    }) 
    }

  return (
    <>
    <ProfileContainer>
        <header>
        <Link to='/'>
                <IoIosArrowBack/>
        </Link>
        <h4>My Profile</h4>
        <button onClick={() => setOption(prev => !prev)}
        onDoubleClick={() => setOption(false)}
        >
            <BsThreeDotsVertical/>
        </button>

        {option && <Option/>}
        </header>
        <main>
            <footer>
            {datas?.user?.profile ? <img src={datas?.user?.profile} alt="profile-photo"/> : <img src={profile} alt="profile-photo"/>}
            
            {!files ? <>
            <input onInput={handleFile} type="file" id="file" accept="image/*" />
            <label htmlFor="file">
                <AiFillCamera/>
            </label>
            </>
             : <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST">
                    <button>
                        <BsCheckLg/>
                    </button>
                </form>}
            </footer>
            <div>
                <h4>{datas?.user?.username}</h4>
            </div>
        </main>

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

/*
const formData = new FormData();

        Object.values(files[0]).forEach(file => {
            formData.append(file.name, file, file.name)
        })

        setTimeout(() => {
            fetch('http://localhost:3001/profile', {
                method : "POST",
                headers : {
                    'Authorization' : `Bearer ${localStorage.getItem("TOKEN")}`,
                    'Content-Type' : 'multipart/form-data'
                },
                body : formData
            }).then((res) => {
                if(!res.ok) return setProfile(defaultProfile)

                const newProfile = URL.createObjectURL(files[0])
                setProfile(newProfile)
            }).catch(err => {
                setProfile(defaultProfile)
            }) 
        }, 0)
*/