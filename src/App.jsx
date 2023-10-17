import { RouterProvider } from 'react-router-dom';
import router from './routes';
// import { Header } from './layout/Header';

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<p>Initial Load...</p>}
      />
    </>
  );
}

export default App;
