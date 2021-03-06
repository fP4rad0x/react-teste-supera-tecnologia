import styled, { keyframes } from 'styled-components'

const animation = keyframes`
0% {
    background-position: 0%
}

50% {
    background-position: 100%
}

100% {
    background-position: 0%
}
    
`

const PicturesBar = styled.div`
  width: 100%;
  height: 180px;
  background-image: url('assets/cover/cover.png');
  background-color: #000000;
  background-size: cover;
  animation: ${animation} 160s infinite;
  font-size: 40px;
  color: white;
  font-weight: bold;
  font-family: 'Roboto';
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  padding: 0 auto;
  text-align: center !important;
`

export default PicturesBar
