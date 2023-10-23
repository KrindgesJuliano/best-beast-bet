import { UserContextProvider } from './user';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const GlobalContext = ({ children }) => (
  <UserContextProvider>{children}</UserContextProvider>
);

UserContextProvider.propType = {
  children: PropTypes.element.isRequired,
};

export default GlobalContext;
