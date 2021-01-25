import React from 'react';
import Button from './button';
import styles from './styles/contact.css';

function Contact() {
  return (
    <div className="contact" style={styles.contact}>
      <div style={Style.nameEmail}> 
        <div style={Style.nameEmailBox}><p>name</p></div>
        <div style={Style.nameEmailBox}><p>email</p></div>
      </div>
      <div style={Style.message}>
          <p>Message...</p>
      </div>
      {/* <Button /> */}
    </div>
  );
}

const Style = {
  contact: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    msrgin: 0,
    border: "red 1px solid",
  },
  nameEmail: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 0,
      height: "15%",
      marginBottom: "10px"
  },
  nameEmailBox: {
      height: "100%",
      width: "45%",
      border: "gray 1px solid"
  },
  message: {
      height: "85%",
      border: "gray 1px solid"
  }
}

export default Contact;