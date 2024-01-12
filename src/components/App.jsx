import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactForm,
  Filter,
  ContactList,
  IsDublicate,
  myFilter,
} from './index';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [{ id: nanoid(), name: '', number: '' }],
    filter: '',
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  addContact = stateForm => {
    const { contacts } = this.state;
    if (IsDublicate(stateForm, contacts)) {
      return alert(`${stateForm.name} is already in contacts`);
    }
    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...stateForm,
      };
      return { contacts: [...contacts, newContact] };
    });
  };

  deleteContact = itemId => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(({ id }) => id !== itemId) };
    });
  };

  contacts = () => myFilter(this.state);

  render() {
    const { addContact, deleteContact, changeFilter, contacts } = this;
    return (
      <div className={css.wraper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter
          title={'Find contacts by name'}
          filter={this.state.filter}
          changeFilter={changeFilter}
        />
        <ContactList contacts={contacts()} deleteContact={deleteContact} />
      </div>
    );
  }
}
