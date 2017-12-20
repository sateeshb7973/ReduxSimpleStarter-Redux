// This is an action creator which returns an action

export  function selectBook(book) {
  //Select book is an action creator it needs to return an action
  // action is an object with a type property
  return {
    type : 'BOOK_SELECTED',
    payload: book
  }

}
