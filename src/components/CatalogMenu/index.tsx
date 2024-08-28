import { CatalogItemType } from '@/types';
import { CatalogItem } from './components/CatalogItem';

type Props = {
  catalogs: CatalogItemType[];
  className?: string;
};

export const CatalogMenu = ({ catalogs, className }: Props) => {
  return (
    <nav className={className}>
      <div className="w-fit px-sm text-center text-yellow text-md bg-light-cyan">
        \
      </div>
      <ul className={`list-none pl-lg `}>
        {catalogs.map((item) => (
          <CatalogItem key={item.title} title={item.title} />
        ))}
      </ul>
    </nav>
  );
};
