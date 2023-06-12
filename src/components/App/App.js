import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import styles from 'components/App/App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleContactsFormSubmit = (name, number) => {
    const { contacts } = this.state;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Phonebook</h1>
        <ContactForm onSubmit={this.handleContactsFormSubmit} />
        <h2 className={styles.heading}>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.handleContactDelete}
        />
      </div>
    );
  }
}

export default App;
