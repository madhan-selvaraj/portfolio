import styled from "styled-components";
import LauncherIcon from "./LauncherIcon";

const HomeScreenContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .title {
    padding: 2rem;
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
        <LauncherIcon to="/projects" iconPath="/assets/icons/apps/projects.png" />
        <LauncherIcon to="/contact" iconPath="/assets/icons/apps/contacts.png" />
        <LauncherIcon to="/profile" iconPath="/assets/icons/apps/profile.png" />
        <LauncherIcon to="/files" iconPath="/assets/icons/apps/files.png" />
        <LauncherIcon to="/mail" iconPath="/assets/icons/apps/mail.png" />
      </Drawer>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
