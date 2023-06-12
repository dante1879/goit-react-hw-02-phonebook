import { Component } from 'react';
import { nanoid } from 'nanoid';
import debounce from 'lodash.debounce';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  //   handleNameInput = event => {
  //     this.setState({ name: event.target.value });
  //     // console.log(this.state);
  //   };

  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleContactsFormSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    if (this.state.name.trim() !== '') {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <div>
        <div className="add-contact">
          <h4>Name</h4>
          <form
            className="add-contact-form"
            onSubmit={this.handleContactsFormSubmit}
          >
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChangeInput}
            />
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChangeInput}
            />
            <input type="submit" value="Add contact" />
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
          <h4>Find contacts by name</h4>
          <input
            type="text"
            name="filter"
            onChange={debounce(this.handleChangeInput, 1000)}
          />
          <ul>
            {contacts
              .filter(el =>
                el.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map(contact => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
