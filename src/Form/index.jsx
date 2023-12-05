import styles from './index.module.scss';
import Input from './Input';

const Form = () => {
  return (
    <div className={styles.hero}>
      <Input />
      <Input />
      <Input />
    </div>
  );
};

export default Form;
