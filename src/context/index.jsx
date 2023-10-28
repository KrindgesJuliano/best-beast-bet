import { UserContextProvider } from './user';
import { WalletContextProvider } from './wallet';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const GlobalContext = ({ children }) => (
  <UserContextProvider>
    <WalletContextProvider>{children}</WalletContextProvider>
  </UserContextProvider>
);

// UserContextProvider.propType = {
//   children: PropTypes.element.isRequired,
// };

export default GlobalContext;
