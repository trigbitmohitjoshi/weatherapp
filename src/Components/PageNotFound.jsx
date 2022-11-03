import React from "react";
import { Link } from "react-router-dom";
import PageNotFoundContainer from "../Styles/PageNotFound";

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <h2>Page Not Found</h2>
      <Link to="/" replace>
        Go to Home
      </Link>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
