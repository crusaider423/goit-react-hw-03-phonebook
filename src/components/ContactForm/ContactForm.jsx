import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const INITIAL_STATE = { name: '', number: '' };

export class ContactForm extends Component {
  nameId = nanoid();
  telId = nanoid();
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { nameId, telId, handleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <div className={css.wraper}>
        <form className={css.form} onSubmit={handleSubmit}>
          <label htmlFor={nameId}> Name</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            id={nameId}
            placeholder="name"
            onChange={handleChange}
            pattern={
              "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            }
          />
          <label htmlFor={telId}>Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            required
            id={telId}
            placeholder="phone number"
            onChange={handleChange}
            pattern={
              '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
            }
          />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
