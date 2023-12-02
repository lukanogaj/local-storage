import styles from './index.module.scss';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.element,
};
export default Layout;
