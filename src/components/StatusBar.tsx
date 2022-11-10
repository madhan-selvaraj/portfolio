import styled from "styled-components";
import { CgBattery } from "react-icons/cg";
import { BiWifi } from "react-icons/bi";

const StatusBarContainer = styled.div`
  padding: 0 5px;
  height: 3vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .icons {
    display: flex;
    align-items: center;
  }

  .icons svg {
    margin-left: 5px;
  }
`;

const StatusBar = () => {
  const time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <StatusBarContainer>
      {time}
      <span className="icons">
        <BiWifi />
        <CgBattery />
      </span>
    </StatusBarContainer>
  );
};

export default StatusBar;
