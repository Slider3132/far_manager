import { DirectoryItemType } from '@/types';

type Props = {
  item: DirectoryItemType;
};

export const DirectoryItem = ({ item }: Props) => {
  return (
    <div className="flex flex-1 justify-between hover:bg-light-cyan hover:text-dark-blue">
      <span className="truncate">{item.title}</span>
      {item.type === 'file' && (
        <span className="flex-auto text-right">{item.extension}</span>
      )}
    </div>
  );
};
