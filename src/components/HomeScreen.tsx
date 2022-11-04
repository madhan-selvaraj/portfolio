import styled from "styled-components";
import LauncherIcon from "./LauncherIcon";

const HomeScreenContainer = styled.main`
  /* padding: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .title {
    padding: 2rem;
    line-height: 1.3rem;
    font-size: 3rem;
  }

  .title span {
    color: #ff0;
  }

  .subtitle {
    padding: 2rem;
    font-size: 1.5rem;
  }
`;

const Drawer = styled.nav`
  width: 100vw;
  height: 8vh;
  padding: 15px 0px;
  position: fixed;
  bottom: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <h1 className="title">
        Hi, Its <span>Madhan</span>
      </h1>
      <span className="subtitle">A Web &amp; App developer</span>
      <Drawer>
        <LauncherIcon to="/" iconPath="/assets/icons/apps/projects.png" />
        <LauncherIcon to="/" iconPath="/assets/icons/apps/contacts.png" />
        <LauncherIcon to="/" iconPath="/assets/icons/apps/profile.png" />
        <LauncherIcon to="/" iconPath="/assets/icons/apps/browser.png" />
        <LauncherIcon to="/" iconPath="/assets/icons/apps/mail.png" />
      </Drawer>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
