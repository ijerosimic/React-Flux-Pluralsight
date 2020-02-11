import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function AuthorForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        label="Name"
        id="name"
        onChange={props.onChange}
        name="name"
        value={props.author.name}
        error={props.error.title}
      ></TextInput>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object
};

export default AuthorForm;
