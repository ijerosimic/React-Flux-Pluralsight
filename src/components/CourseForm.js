import React from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        label="title"
        id="title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        error={props.error.title}
      ></TextInput>

      <SelectInput
        label="author"
        id="author"
        name="authorId"
        onChange={props.onChange}
        value={props.course.authorId || 0}
        options={[
          { id: 1, name: "Cory House" },
          { id: 2, name: "Scott Allen" }
        ]}
        error={props.error.authorId}
      ></SelectInput>

      <TextInput
        label="category"
        id="category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.error.category}
      ></TextInput>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object
};

export default CourseForm;
