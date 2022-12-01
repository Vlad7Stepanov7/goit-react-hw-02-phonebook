import PropTypes from 'prop-types';
import { node } from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
       <ul>{contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        )
      })}</ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: node.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,

    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;