import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
const CustomerListItem = ({ name, editAction, delAction, urlPath, dni }) => {
  return (
    <Router>
      <div className="customers-list-item">
        <div className="field">
          <Link to={`${urlPath}${dni}`}>{name}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
        </div>
      </div>
    </Router>
  );
};

CustomerListItem.propTypes = {
  dni: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default CustomerListItem;
