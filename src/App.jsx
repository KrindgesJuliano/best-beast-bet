import { RouterProvider } from 'react-router-dom';
import router from './routes';
import GlobalContext from './context';
// import { Header } from './layout/Header';

function App() {
  return (
    <>
      <GlobalContext>
        <RouterProvider
          router={router}
          fallbackElement={<p>Initial Load...</p>}
        />
      </GlobalContext>
    </>
  );
}

export default App;
