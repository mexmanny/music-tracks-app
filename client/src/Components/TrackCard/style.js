import styled from "@emotion/styled";

export const TrackContainer = styled.div`
  color: white;
  position: relative;
  border: 5px solid #ffff00;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.5); /* Black w/opacity/see-through */
  
  h1 {
    font-size:35px;
  }
  h2 {
    justify-content: center;
    display: flex;
  }

  h3 {
    color:white;
    justify-content: center;
    display: flex;
  }
  &:hover{

    background-color: rgba(0, 0, 0, 0); /* Black w/opacity/see-through */


`;

export const TrackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: brightness(65%);
  -webkit-filter: brightness(65%);
`;
