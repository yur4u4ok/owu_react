import css from './Button.module.css'

const Button = ({children, click}) => {
    return (
        <div className={css.Button} onClick={click}>
            {children}
        </div>
    )
}

export{
    Button
}
