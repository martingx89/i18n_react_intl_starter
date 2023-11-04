import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { IntlProvider } from 'react-intl';
import { LOCALES } from '../i18n/locales';
import { messages } from '../i18n/messages';
import { useState } from 'react';

const App = () => {
  const locale = LOCALES.ENGLISH;

  const [currentLocale, setCurrentLocale] = useState(locale);

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
  };

  return (
    <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.ENGLISH}>
      <div>
        <Header currentLocale={currentLocale} handleChange={handleChange} />
        <Content />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
