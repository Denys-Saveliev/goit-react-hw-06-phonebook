import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import Container from './Container';
import Section from './Section';
import ContactForm from './contactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    return localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleSearchContact = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContactList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const formSubmitHandler = data => {
    setContacts(prevState => {
      if (
        prevState.find(
          contact => contact.name.toLowerCase() === data.name.toLowerCase()
        )
      ) {
        Notiflix.Notify.failure(`${data.name} is already in contacts`);
        return prevState;
      }
      return [...prevState, { id: nanoid(), ...data }];
    });
  };

  const deleteContact = contactId =>
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>

      {contacts && contacts.length > 0 && (
        <Section title="Contacts">
          <Filter value={filter} onSearch={handleSearchContact} />
          <ContactList
            contacts={filterContactList()}
            onDeleteContact={deleteContact}
          />
        </Section>
      )}
    </Container>
  );
}

export default App;
