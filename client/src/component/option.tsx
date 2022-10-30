import {  useNavigate } from "react-router-dom";
import { OptionContainer } from "./option.styled"

const options = ['Logout', 'Register'];

const Navigates = (value: string) => {
    if (value === 'Login') {
        return "/login"
    } else if (value === 'Logout') {
        return ''
    }
    else {
        return "/register"
    }
};



const Option = () => {
    const navigate = useNavigate();
    const handleClick = (s : string) => {
        if(s === "Logout"){
            localStorage.removeItem('TOKEN')
        }else {
            navigate(`/${s}`)
        }
    }
    return (
        <OptionContainer >
            {options.map((s, i) => (
                <section key={i}>
                    <button onClick={() => handleClick(s)}>{s}</button>
                </section>
            ))}
        </OptionContainer>
    )
}

export default Option