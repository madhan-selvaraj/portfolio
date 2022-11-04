import { Link } from "react-router-dom";
import styled from "styled-components";

type LauncherIconProps = {
  iconPath: string;
  title?: string;
  to: string;
};

const AppIcon = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 70px;
  align-items: center;
  font-size: 0.8rem;

  img {
    width: 50px;
    height: 50px;
    margin: 5px;
  }
`

const LauncherIcon = (props: LauncherIconProps) => {
  return (
    <AppIcon to={props.to}>
      <img
        src={props.iconPath}
        alt={props.title || props.to.replace("/", "")}
      />
      {props.title && <span>{props.title}</span>}
    </AppIcon>
  );
};

export default LauncherIcon;
