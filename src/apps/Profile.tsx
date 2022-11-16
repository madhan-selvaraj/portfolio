import styled from "styled-components";

const ProfilePage = styled.div`
  padding: 2rem;
  font-size: 1.2rem;
  line-height: 1.5rem;

  h1 {
    font-size: 1.5rem;
  }

  h1 span {
    color: yellow;
  }
`;

const Profile = () => {
  return (
    <ProfilePage>
      <h1>
        Hey, my name is <span>Madhan</span>
      </h1>
      &nbsp; &nbsp;
      <div>
        I'm a web application developer specialized in Frontend development with
        React. I enjoy building creative stuff. Upon my graduation in Computer
        Science and Engineering, I have been working as a Software Developer at{" "}
        <a href="http://trimble.com">Trimble Inc.</a>
      </div>
      &nbsp;
      <div>
        I work with Javascript, React, Typescript, SASS, Material UI. I'm good
        with Node.js, Express.js, styled-components, Bootstrap.
      </div>
    </ProfilePage>
  );
};

export default Profile;
