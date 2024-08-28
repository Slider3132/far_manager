import { DropdownMenuType } from '@/types';

type Props = React.LiHTMLAttributes<HTMLLIElement> & {
  item: DropdownMenuType;
};

export const DropdownButton = ({ item, className, ...rest }: Props) => {
  return (
    <li
      {...rest}
      className={` flex justify-between hover:text-white hover:bg-black px-[8px] text-black cursor-pointer  ${className}`}
    >
      <div className="first-letter:text-yellow">{item.title}</div>
      <div className="text-left">{item.command}</div>
    </li>
  );
};
