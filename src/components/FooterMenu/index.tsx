import { FooterMenuItemType } from '@/types';
import { MenuItem } from './components/MenuItem';

export const FooterMenu = ({ items }: { items: FooterMenuItemType[] }) => {
  return (
    <nav className="flex text-lg justify-between bg-black">
      {items.map((item) => (
        <MenuItem key={item.digit} digit={item.digit} title={item.title} />
      ))}
    </nav>
  );
};
