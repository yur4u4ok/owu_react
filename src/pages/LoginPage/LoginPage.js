import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";
import {useState} from "react";

const LoginPage = () => {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const submit = async(user) => {
        try{
            const {data} = await authService.login(user)
            authService.setTokens(data)
            navigate('/cars')
        }
        catch(e){
            setError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error && <h4>{error.detail}</h4>}
            <input type="text" placeholder={'username'} {...register('username')} />
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Login</button>
        </form>
    )
}

export {
    LoginPage
}
