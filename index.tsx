import { IndexPage } from './components/pages';
import './styles.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <IndexPage />
      </ChakraProvider>
    </Provider>
  );
};

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(<App />);
}
