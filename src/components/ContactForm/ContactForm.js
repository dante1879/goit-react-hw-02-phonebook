import PropTypes from 'prop-types';

import { Component } from 'react';
import styles from 'components/ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h4 className={styles.title}>Name</h4>
        <input
          type="text"
          name="name"
          value={name}
          className={styles.input}
          onChange={this.handleChange}
          placeholder="Enter name"
          required
        />
        <h4 className={styles.title}>Number</h4>
        <input
          type="tel"
          name="number"
          value={number}
          className={styles.input}
          onChange={this.handleChange}
          placeholder="Enter number"
          required
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
