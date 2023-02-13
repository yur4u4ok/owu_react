import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import {authService} from "../../services";

const RegisterPage = () => {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const submit = async (user) => {
        try {
            await authService.register(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error && <h4>{error.username}</h4>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Register</button>
        </form>

    )
}

export {
    RegisterPage
}
