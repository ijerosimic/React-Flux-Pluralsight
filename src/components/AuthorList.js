import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AuthorList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map(x => {
          return (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>
                <Link to={"/authors/" + x.slug}>{x.name}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

AuthorList.propTypes = {
  autjprs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default AuthorList;
