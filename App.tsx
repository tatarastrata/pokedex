import { IndexPage } from './components/pages';
import './styles.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <IndexPage />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
