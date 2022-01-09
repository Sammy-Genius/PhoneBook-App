import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const addVariants = {
    from: {
        y:1000,
        opacity:0
    },
    to: {
        y:0,
        opacity:1,
        transition: { type: 'tween', duration: .6 }
    }
}

const ContactList = ( { listOfContacts, deleteContact, editContactInfo, showModal }) => {
    return ( 
        <div className="main-container"> 
            {listOfContacts.map((contact) => {
            return <motion.div className="contact-list" key = {contact.id}
            variants = {addVariants}
            initial = "from"
            animate = "to"
            >
                    <Link className = "contact-link" to = {`/ContactDetails/${contact.name.firstName}/${contact.name.lastName}/${contact.number}`}>
                        <div className="contact-list-box">
                            <div className="contact-img">
                                <img src={require('../assets/img-6.png').default} alt="contact info phonebook" />
                            </div>
                            <div className="contact">
                                <h2>{contact.name.firstName} {contact.name.lastName}</h2>
                                <p>{contact.number}</p>
                            </div>
                        </div>
                    </Link>
                    <div className="update-box">
                            <div className="edit" onClick={() => editContactInfo(contact.id)}>
                                <FontAwesomeIcon icon={ faUserEdit } />
                            </div>
                            <div className="delete" onClick={() => deleteContact(contact.id)}>
                                <FontAwesomeIcon icon={ faTrashAlt } />
                            </div>
                    </div>
                </motion.div>
            })}
            <div className="add-wrapper">
                <div className="add" onClick = { showModal }><FontAwesomeIcon className = "add-icon" icon = { faPlus }/></div>
            </div>
        </div>
     );
}
 
export default ContactList;