import React, { Component } from  'react';
import './addBookmark.css';

class AddBookmark extends Component {
  addBookMark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddForm: false
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      description: "",
      rating: 1
    };
  }

  render() {
    return (
      <div className="addbookmark">
        <h2>Add Bookmark</h2>
        <form className="addbookmark__form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={this.state.title}/>
        <label htmlFor="url">Url:</label>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="url"
          value={this.state.url}/>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          placeholder="description"
          value={this.state.description}/>
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          name="rating"
          id="rating"
          min="1"
          max="5"
          value={this.state.rating}/>

          <div className="addbookmark__buttons">
            <button onClick={e => this.props.showForm(false)}>Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddBookmark;