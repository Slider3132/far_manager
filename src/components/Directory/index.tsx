import { DirectoryItemType } from '@/types';
import { DirectoryItem } from './сomponents/DirectoryItem';

type Props = {
  directories: DirectoryItemType[];
  title: string;
  className?: string;
};

export const Directory = ({ directories, title, className }: Props) => {
  return (
    <div className={`flex flex-1 flex-col h-full p-xs ${className || ''}`}>
      <span className="text-yellow text-center">{title}</span>
      <nav>
        {directories.map((item) => (
          <DirectoryItem key={item.title} item={item} />
        ))}
      </nav>
    </div>
  );
};
