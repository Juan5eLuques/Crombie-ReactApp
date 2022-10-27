import styled from 'styled-components'

type PropsButton = {
    title : string,
    color : string,
}

export const ButtonMenu = ({title, color} : PropsButton) => {
  return (
    <Container color={color}>
      <div>
        <span>{title}</span>
      </div>
    </Container>
  );
};


const Container = styled.div`

background-color: ${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
height: 220px;
width: 220px;
border-radius: 5px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 25px ;
transition : filter, scale 1000ms;

:hover {
  filter: drop-shadow(16px 16px 20px rgb(0,0,0,0.1));
  filter: brightness(110%);
  scale: 1.02;
}

`

