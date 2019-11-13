import React from 'react';

export default class EditBlog extends React.Component {
  state = {
    blogData: {
      title: '',
      image_url: '',
      content: '',
      location: ''
      // "additional_images:" input field is part of Post MVP. Figure out how to implement this field in the form. Will have to make changes to the back end as well.
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevstate => ({
      blogData: {
        ...prevstate.blogData,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.handleEdit(this.props.id, this.state.blogData, this.props.currentUser.id)
        }}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.blogData.title}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="image_url">Image URL</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            value={this.state.blogData.image_url}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="content"
            id="content"
            value={this.state.blogData.content}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={this.state.blogData.location}
            onChange={this.handleChange}
          />
          <br />
          <button>Edit Blog</button>
        </form>
      </div>
    )
  }
}
