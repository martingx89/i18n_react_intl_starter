import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { IntlProvider } from 'react-intl';
import { LOCALES } from '../i18n/locales';
import { messages } from '../i18n/messages';

const App = () => {
  const locale = LOCALES.POLISH;

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.ENGLISH}>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
