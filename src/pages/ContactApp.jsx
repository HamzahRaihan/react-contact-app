import React from 'react';
import ContactList from '../components/ContactList';
import RatingStars from '../components/RatingStars';
import { getData } from '../utils/datas';

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
        <RatingStars />
      </div>
    );
  }
}

export default ContactApp;
