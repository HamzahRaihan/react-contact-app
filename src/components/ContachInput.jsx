/* eslint-disable react/prop-types */
import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      tag: '',
      maxLength: 50,
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    const inputValue = event.target.value;
    const maxLength = this.state.maxLength;

    if (inputValue.length <= maxLength) {
      this.setState(() => {
        return {
          name: inputValue,
        };
      });
    }
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <p>Characters left: {this.state.maxLength - this.state.name.length}</p>
        <input type="text" placeholder="nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type="text" placeholder="tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
        <button type="submit">tambah</button>
      </form>
    );
  }
}

export default ContactInput;
