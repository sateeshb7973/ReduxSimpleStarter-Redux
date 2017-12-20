import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; // Action creator
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={()=> this.props.selectBook(book)}
        className="list-group-item">
      {book.title}
      </li>);
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned from here will show up as props inside of BookList
  // whenever the application state changes than the component  BookList re-renders automatically
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook(action creator) is called, the result should be passed to all the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// connect function takes a function and a component and produces a container.

//Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it availabe as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
