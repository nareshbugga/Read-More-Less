// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Heading,
  SubHeading,
  Description,
  Image,
  SubContainer,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const text = reactHooksDescription.slice(0, 170)
  const [showText, setShowText] = useState(false)
  const description = showText ? reactHooksDescription : text
  const buttonText = showText ? 'Read Less' : 'Read More'

  const onShowText = () => {
    setShowText(prevState => !prevState)
  }
  return (
    <MainContainer>
      <SubContainer>
        <Heading>React Hooks</Heading>
        <SubHeading>Hooks are a new addition to React</SubHeading>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>{description}</Description>
        <Button type="button" onClick={onShowText}>
          {buttonText}
        </Button>
      </SubContainer>
    </MainContainer>
  )
}

export default ReadMore
