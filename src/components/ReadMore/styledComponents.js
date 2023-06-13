// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  padding: 15px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-style: 'normal';
  font-size: 25px;
  font-weight: bold;
  color: #1e293b;
`
export const SubHeading = styled.p`
  font-family: 'Roboto';
  font-style: 'normal';
  font-size: 20px;
  font-weight: 500;
  color: #334155;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-style: 'normal';
  font-size: 17px;
  font-weight: 500;
  color: #334155;
`
export const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`
export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: #1f81ff;
  color: #ffffff;
  font-family: 'Roboto';
  font-style: 'normal';
  border: none;
  cursor: pointer;
`
