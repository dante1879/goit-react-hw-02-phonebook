import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <li className={styles.item}>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
