import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

//FRAMER-MOTION ANIMATIONS
const modalVariants = {
    from: {
        opacity:0,
        y:1000,
    },
    to: {
        opacity:1,
        y:0,
        transition: {
            type: 'tween',
            duration: .6,
            when: 'beforeChildren',
            staggerChildren:.5
        }
    },
    exit: {
        opacity:0,
        y:1000,
        transition: {
            type: 'tween',
            duration: .6,
            when: 'afterChildren',
            staggerChildren:.5
        }
    }
}

const showBtnVariants = {
    from: {
        opacity:0,
        x: 100
    },
    to: {
        opacity:1,
        x:0,
        transition: {
            type: 'tween',
            duration: .6
        }
    }
}
//END OF FRAMER-MOTION ANIMATIONS

const App = () => {
    const [modal, setModal] = useState(false);
    const [contactFirstName, setContactFirstName] = useState('');
    const [contactLasttName, setContactLastName] = useState('');
    const [contactNumber, setContactNumber] = useState(null);
    const [listOfContacts, setListOfContacts] = useState([]);

    const showModal = () => {
        setModal(!modal);
    }

    const addContact = () => {
        setListOfContacts([...listOfContacts, {name: {firstName: contactFirstName, lastName: contactLasttName}, number: contactNumber, id: listOfContacts.length}]);
        setContactFirstName('');
        setContactLastName('');
        setContactNumber(null);
        setModal(!modal);
    }

    const deleteContact = (id) => {
        const updatedContacts = listOfContacts.filter(contactInfo => contactInfo.id !== id);
        setListOfContacts(updatedContacts);
    }

    const editContactInfo = (id) => {
        const editedContact = listOfContacts.filter(contactInfo => contactInfo.id !== id);
        setListOfContacts(editedContact);
        setModal(!modal);
    }

    return (
        <Router>
        <div id="App">
            <div className="container">
                <header>
                    <h1>PhoneBo<span>ok</span></h1>
                </header>
                <main>
                    <Switch>
                        <Route exact path = "/">
                            <ContactList 
                            listOfContacts = { listOfContacts } 
                            deleteContact = { deleteContact } 
                            editContactInfo = { editContactInfo }
                            showModal = { showModal }
                            />
                        </Route>
                        <Route path = "/ContactDetails/:firstName/:lastName/:number">
                            <ContactDetails/>
                        </Route>
                    </Switch>
                </main>
                <AnimatePresence>
                    { modal && (
                        <motion.div className="modal"
                        variants={ modalVariants }
                        initial="from"
                        animate="to"
                        exit="exit"
                        >
                            <motion.div className="modal-content" variants = { modalVariants }>
                                <div className="content-wrapper">
                                    <div className="add-contact">
                                        <p onClick = { showModal }>cancel</p>
                                        <h2>New Contact</h2>
                                        { contactNumber && (
                                            <motion.div className="create-contact" onClick = { addContact } 
                                            variants = { showBtnVariants }
                                            initial = "from"
                                            animate = "to"
                                            >
                                                <FontAwesomeIcon className = "create-icon" icon = { faPlus } />
                                            </motion.div>
                                        )}
                                    </div>
                                    <div className="contact-details">
                                        <div className="img">
                                            <img src= { require('../assets/img-6.png').default } alt="add contact" />
                                        </div>
                                        <div className="input-box">
                                            <input type="text" placeholder="First Name" onChange={ (e) => setContactFirstName(e.target.value)}/>
                                            <input type="text" placeholder="Last name" onChange={ (e) => setContactLastName(e.target.value)}/>
                                            <input type="text" placeholder="Contact number" onChange={ (e) => setContactNumber(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="circle"></div>
                <div className="circle-two"></div>
                <div className="circle-two-reloaded"></div>
            </div>
            <div className="circle-three"></div>
            <div className="circle-four"></div>
            <div className="shape"></div>
        </div>
        </Router>
     );
}
 
export default App;