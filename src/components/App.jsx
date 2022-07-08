import Container from './Container';
import Section from './Section';
import ContactForm from './contactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useSelector } from 'react-redux';
import { getItems } from 'redux/contactsSlice';

function App() {
  const contacts = useSelector(getItems);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {contacts && contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </Container>
  );
}

export default App;
