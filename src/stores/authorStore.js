import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _authors = [];

class AuthorStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emmitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAuthors() {
    return _authors;
  }

  getAuthorBySlug(slug) {
    return _authors.find(authors => authors.slug === slug);
  }
}

const store = new AuthorStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_AUTHOR:
      _authors.push(action.authors);
      store.emmitChange();
      break;

    case actionTypes.LOAD_AUTHORS:
      _authors = action.authors;
      store.emmitChange();
      break;

    default:
      break;
  }
});

export default store;
