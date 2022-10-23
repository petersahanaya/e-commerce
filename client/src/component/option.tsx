import { Link } from "react-router-dom";
import { OptionContainer } from "./option.styled"

const options = ['Edit Profile', 'Logout', 'Register'];

const Navigates = (value : string) => {
    if(value === 'Edit Profile') {
        return "/edit"
    }else if(value === 'Login') {
        return "/login"
    }else if(value === 'Logout'){
        return ''
    }
    else {
        return "/register"
    }
};

const Option = () => {
  return (
    <OptionContainer>
        {options.map((s) => (
            <>
                <Link to={Navigates(s)}>{s}</Link>
            </>
        ))}
    </OptionContainer>
  )
}

export default Option