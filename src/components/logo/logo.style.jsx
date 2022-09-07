import styled from "styled-components";
import logo from "../../assets/logo/rocket-logo-cut.png";

export const CustomLogo = styled.img.attrs({
  src: `${logo}`,
})`
  width: auto;
  height: 100px;
  border-radius: 100%;
  &:hover{

    @keyframes launch {
        from {padding-bottom: 0px;}
        to {padding-bottom: 40px;}
    }

    animation-name: launch;
    animation-duration: 3s;
  }
`;
