import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const contactVariants = {
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

const ContactDetails = () => {
    const { firstName, lastName, number } = useParams();
    return ( 
        <motion.div className="each-contact-details"
        variants = {contactVariants}
        initial = "from"
        animate = "to"
        exit = "exit"
        >
            <div className="details">
                <div className="back-to-contactList">
                    <Link to="/">
                        <FontAwesomeIcon icon = { faChevronLeft }/>
                    </Link>
                    <Link to="/">Contact List</Link>
                </div>
                <div className="each-contact-info">
                    <div className = "img">
                        <img src={require('../assets/img-6.png').default} alt="contact-info contact-details phonebook" />
                    </div>
                    <div className="contact-name-and-number">
                        <div>
                            <h2>First Name :</h2>
                            <h2>Last Name :</h2>
                            <h2>Number :</h2>
                        </div>
                        <div>
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                            <p>{number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}
 
export default ContactDetails;