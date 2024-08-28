import { CatalogItemType } from '@/types';
import { getPseudoBorder } from '@/utils';
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

      <div
        className={`flex p-xs pt-0 w-full h-full flex-1 ${getPseudoBorder({
          size: 'md',
          none: ['top'],
        })}`}
      >
        <div
          className={`flex flex-1 flex-col ${getPseudoBorder({
            size: 'sm',
            none: ['top'],
          })}`}
        >
          <CatalogMenu className="flex-1 p-xs pt-0 pb-0" catalogs={catalogs} />
          <BottomSpace description="C:\" />
        </div>
      </div>
    </section>
  );
};
