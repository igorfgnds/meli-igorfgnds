import Link from 'next/link';

import styles from './styles.module.scss';

import animations from '@/theme/motion.module.scss';

import { IconChevron } from '@/icons';

export interface BreadcrumbProps {
  categories: string[];
}

const Breadcrumb = (props: BreadcrumbProps): JSX.Element => {
  return (
    <nav className={`${styles.breadcrumb} ${animations.fadein}`}>
      <ul>
        <li>
          <Link href="/">Início</Link>
          <IconChevron />
        </li>
        {props.categories.map((category) => {
          return (
            <li key={category}>
              {category}
              <IconChevron />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
