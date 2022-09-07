import styled from "styled-components";

export const Image = styled.div`
  min-height: 400px;
  height: 70%;
  max-height: 365px;
  background-image: url(${(props) => props.url || ""});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  min-width: 365px;
  width: 30%;
  min-height: 400px;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: solid;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    & ${Image} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }
`;

export const Title = styled.h3`
  font-style: bold;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Subtitle = styled.h2`
  font-size: 13px;
  min-width: 120px;
  text-align: start;
  padding-left: 10px;
  margin: 0;
`;

export const Text = styled.span`
  width: 70%;
  font-size: 20px;
  text-align: justify;
  text-justify: inter-word;
  padding-right: 10px;
  padding-bottom: 15px;
`;
