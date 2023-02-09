import styles from './styles.module.scss';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant: 'secondary' | 'success';
}

const Badge = (props: BadgeProps): JSX.Element => {
  const variant = props.variant === 'secondary' ? styles['badge--secondary'] : styles['badge--success'];

  return <span className={`${styles.badge} ${variant} ${props.className || ''}`}>{props.children}</span>;
};

export default Badge;
