import MyButton from './styles'

const Button = ({children, setColor, click}) => {

    return(
      <MyButton 
          setColor={setColor}
          onClick={click}
        >{children}
      </MyButton>
    )
}

export default Button