import { FooterMenuItemType } from '@/types';

export const MenuItem = ({ digit, title }: FooterMenuItemType) => {
  return (
    <div>
      <span className=" text-light-gray">{digit}</span>
      <span className=" text-black bg-dark-cyan pr-[24px]">{title}</span>
    </div>
  );
};
