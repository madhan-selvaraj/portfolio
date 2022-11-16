import React, { Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
const Mail = React.lazy(() => import("./apps/Mail"));
const Profile = React.lazy(() => import("./apps/Profile"));
const ComingSoon = React.lazy(() => import("./components/ComingSoon"));
const HomeScreen = React.lazy(() => import("./components/HomeScreen"));

const routes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <HomeScreen />,
  },
  {
    path: "/projects",
    element: (
      <Suspense
        fallback={
          <SplashScreen icon="/assets/icons/apps/projects.png" title="Projects" />
        }
      >
        <ComingSoon />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense
        fallback={
          <SplashScreen icon="/assets/icons/apps/contacts.png" title="Contact" />
        }
      >
        <ComingSoon />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense
        fallback={
          <SplashScreen icon="/assets/icons/apps/profile.png" title="Profile" />
        }
      >
        <Profile />
      </Suspense>
    ),
  },
  {
    path: "/files",
    element: (
      <Suspense
        fallback={
          <SplashScreen icon="/assets/icons/apps/files.png" title="Files" />
        }
      >
        <ComingSoon />
      </Suspense>
    ),
  },
  {
    path: "/mail",
    element: (
      <Suspense
        fallback={
          <SplashScreen icon="/assets/icons/apps/mail.png" title="Mail" />
        }
      >
        <Mail />
      </Suspense>
    ),
  },
];

const Apps = () => {
  const Apps = useRoutes(routes);

  return <>{Apps}</>;
};

export default Apps;
