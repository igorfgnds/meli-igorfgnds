import styles from './styles.module.scss';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Paper = (props: PaperProps): JSX.Element => {
  return <div className={`${styles.paper} ${props.className || ''}`}>{props.children}</div>;
};

export default Paper;
