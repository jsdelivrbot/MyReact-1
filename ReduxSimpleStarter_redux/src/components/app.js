import React, { Component, Fragment } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BookList />
        <BookDetail />
      </Fragment>
    );
  }
}
