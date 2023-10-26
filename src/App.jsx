import { RouterProvider } from 'react-router-dom';
import router from './routes';
import GlobalContext from './context';
import axios from 'axios';
// import { Header } from './layout/Header';

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response?.status === 401 || err.response?.status === 403) {
      localStorage.clear();
      window.location.href = '/login';
    }

    return Promise.reject(err);
  }
);

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
