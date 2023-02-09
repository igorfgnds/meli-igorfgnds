import styles from './styles.module.scss';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button = (props: ButtonProps): JSX.Element => {
  const variant = props.variant === 'primary' ? styles['button--primary'] : styles['button--secondary'];

  return <button className={`${styles.button} ${variant} ${props.className || ''}`}>{props.children}</button>;
};

export default Button;
