import React, { useState, useEffect } from "react";
import AuthorForm from "./AuthorForm";
import authorStore from "../stores/authorStore";
import { toast } from "react-toastify";
import * as authorActions from "../actions/authorActions";

const ManageAuthorPage = props => {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [author, setAuthor] = useState({
    id: null,
    name: ""
  });

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (authors.length === 0) {
      authorActions.loadAuthors();
    } else if (slug) {
      const author = authorStore.getAuthorBySlug(slug);
      if (author) setAuthor(author);
      else return props.history.push("/NotFound");
    }
    return () => authorStore.removeChangeListener(onChange);
  }, [authors.length, props.match.params.slug, props.history]);

  function onChange() {
    setAuthors(authorStore.getAuthors());
  }

  function handleChange({ target }) {
    setAuthor({
      ...author,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!author.name) _errors.title = "Name is required!";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    authorActions.saveAuthor(author).then(() => {
      props.history.push("/authors");
      toast.success("Author saved!");
    });
  }

  const form = (
    <>
      <h2>Manage Course</h2>
      <AuthorForm
        error={errors}
        author={author}
        onChange={handleChange}
        onSubmit={handleSubmit}
      ></AuthorForm>
    </>
  );

  return form;
};

export default ManageAuthorPage;
