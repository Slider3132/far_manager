import { CatalogItemType } from '@/types';
import { BottomSpace } from '../BottomSpace';
import { CatalogMenu } from '../CatalogMenu';

type Props = {
  catalogs: CatalogItemType[];
};

export const Sidebar = ({ catalogs }: Props) => {
  return (
    <section className="flex flex-1 flex-col h-full">
      <div className="text-center text-lg text-dark-blue bg-light-cyan">
        Tree
      </div>
      <div className="flex flex-1 border-4 border-t-0 ">
        <div className="flex flex-col flex-1 m-xxs mt-0  border-2 border-t-0">
          <CatalogMenu className="flex-1 p-xs pt-0" catalogs={catalogs} />
          <BottomSpace description="C:\" />
        </div>
      </div>
    </section>
  );
};
