import styled from "styled-components";
import sidebar from "../../assets/img/sidebar.png";

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #efefef;
`;

export const Sidebar = styled.div`
  width: 38.3125vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background: url(${sidebar}) no-repeat center center;
  background-size: 100vh 100;
`;

export const SelectContainer = styled.select`
  height: 2.825rem;
  width: 10.494rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  text-align: center;
`;

export const SelectDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 10vh;
`;

export const NumberContainer = styled.div`
  width: 100%;
  height: 6.9375vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 61.6875vw;
  height: 100vh;
`;

export const Ellipse = styled.div`
  width: 6.9375vw;
  height: 6.9375vw;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.688rem;
  line-height: 33px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 10vh;
  gap: 1.6595900439238653vw;
  img {
    width: 4.340409956076135vw;
    height: 8.418569254185693vh;
    border-radius: 0px;
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.313rem;

    color: #ffffff;
  }
`;

export const FooterText = styled.div`
  position: absolute;
  left: 47.62%;
  right: 11.75%;
  top: 89.17%;
  bottom: 8.98%;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.25rem;
  text-align: center;
`;
