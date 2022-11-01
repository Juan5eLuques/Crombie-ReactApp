import { Link } from "react-router-dom";
import styled from "styled-components";
import { CrombieLogo } from "./CrombieLogo";

export const Header = () => (
  <Container>
    <Link to={"/"}>
      <LogoTitle>
        <CrombieLogo style={{ margin: "10px 15px" }}></CrombieLogo>
      </LogoTitle>
    </Link>
    <div style={{ margin: "15px" }}>
      <ul style={{ listStyleType: "none" }}>
        <Link to="/add-product">
          <ButtonLink> Add Product </ButtonLink>
        </Link>
      </ul>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
`;

const LogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonLink = styled.li`
  border: 1px solid #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 15px;
  transition: background-color 400ms;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;
