import styles from './index.module.scss';
import Input from '../Input';
import Heading from '../Heading';

const Form = () => {
  return (
    <div className={styles.hero}>
      <Heading />
      <Input />
    </div>
  );
};

export default Form;
