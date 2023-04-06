import styled from 'styled-components';

export const RentalList = styled.ul`
  display: grid;
  gap: 30px;
`;

export const RentalCollectionItem = styled.li`
  margin-bottom: 50px;
`;

export const RentalCollectionOverlay = styled.div`
  position: relative;
  overflow: hidden;
`;

export const RentalCollectionImg = styled.img`
  width: 400px;
  height: 500px;
`;

export const RentalCollectionAnimation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ccd0c3;
  transform: translateY(100%);
  transition: transform 450ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const RentalCollectionLink = styled.a`
  display: block;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    > ${RentalCollectionOverlay} > ${RentalCollectionAnimation} {
      transform: translate(0);
    }
  }
`;

export const RentalCollectionAnimationText = styled.p`
  width: 322px;
  height: 168px;
  padding: 63px 24px;
  font-size: 18px;
  letter-spacing: 0.03em;
  line-height: 20px;
  color: white;
`;

export const RentalCollectionCard = styled.div`
  width: 300px;
  padding: 20px 24px;
  border: 1px solid #eeeeee;
  @media screen and (min-width: 1199px) {
    width: 100%;
  }
`;

export const RentalCollectionHeading = styled.h2`
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
  color: black;
`;

export const RentalCollectionDescription = styled.p`
  font-size: 16px;
  line-height: 1.9;
  letter-spacing: 0.03em;
  color: #757575;
  @media screen and (min-width: 1199px) {
    display: none;
  }
`;
