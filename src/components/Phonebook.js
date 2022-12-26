import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Form extends Component {
    
    state = {
        contacts: [],
        name: ''
    }
  
    loginInputId = nanoid();

  render() {
      return (
          <div>
              
              <form>
                  <h1 class="title">Phonebook</h1>
                  <label htmlFor={this.loginInputId}>Name</label>
                  <input
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required />
                  <label htmlFor={this.loginInputId}>Number</label>
                  <input
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required />
                  <button type="button">Add contact</button>
              </form>
              <div class="contacts">
            <h2 class="title">Contacts</h2>
              <label htmlFor={this.loginInputId}>Find contacts by name</label>
              <input type="text"></input>
              <button typeof="button">X</button></div> 
          </div>
    );
  }
}