import MyButton from './styles'

const Button = ({children, setColor, setSize, click}) => {

    return(
      <MyButton 
          setColor={setColor}
          onClick={click}
          setSize={setSize}
        >{children}
      </MyButton>
    )
}

export default Button