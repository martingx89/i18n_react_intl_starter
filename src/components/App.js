import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { IntlProvider } from 'react-intl';

const App = () => {
  // console.log(IntlProvider);
  return (
    <IntlProvider messages={{}} locale='en' defaultLocale='en'>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default App;
