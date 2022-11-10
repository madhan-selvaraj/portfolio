import styled from "styled-components";

const SplashScreenContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 100px;
  }
`;

type SplashScreenProps = {
  icon: string;
  title: string;
};

const SplashScreen = (props: SplashScreenProps) => {
  return (
    <SplashScreenContainer>
      <img src={props.icon} alt={props.title} />
      <h2>{props.title}</h2>
    </SplashScreenContainer>
  );
};

export default SplashScreen;
