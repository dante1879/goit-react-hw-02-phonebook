import PropTypes from 'prop-types';

import styles from 'components/Filter/Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.filter}>
    <h4 className={styles.title}>Find contacts by name</h4>
    <input
      type="text"
      name="filter"
      value={value}
      className={styles.input}
      onChange={onChange}
      placeholder="Search..."
    />
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
