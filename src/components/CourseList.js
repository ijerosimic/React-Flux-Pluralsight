import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(x => {
          return (
            <tr key={x.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    props.deleteCourse(x.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/course/" + x.slug}>{x.title}</Link>
              </td>
              <td>{x.authorId === 1 ? "Cory House" : "Scott Allen"}</td>
              <td>{x.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  )
};

export default CourseList;
