import React, { useState, useEffect } from "react";
import authorStore from "../stores/authorStore";
import AuthorList from "./AuthorList";
import { Link } from "react-router-dom";
import { loadAuthors } from "../actions/authorActions";

function AuthorsPage() {
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    if (authorStore.getAuthors().length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onChange); //cleanup on unmount
  }, [authors.length]);

  function onChange() {
    setAuthors(authorStore.getAuthors());
  }

  return (
    <>
      <h2>Authors</h2>
      <Link className="btn btn-primary" to="/author">
        Add author
      </Link>
      <AuthorList authors={authors}></AuthorList>
    </>
  );
}

export default AuthorsPage;
