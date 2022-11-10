import styled from "styled-components";
import { CgBattery } from "react-icons/cg";
import { BiWifi } from "react-icons/bi";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 250px;
  }
`;

const ComingSoon = () => {
  return (
    <Container>
        <img src="/assets/icons/coming-soon.png" alt="Coming soon" />
        <h2>Coming soon</h2>
    </Container>
  );
};

export default ComingSoon;
