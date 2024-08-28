import { DropdownMenuType } from '@/types';
import { getPseudoBorder } from '@/utils';
import { useEffect, useRef } from 'react';
import { DropdownButton } from './DropdownButton';

type Props = {
  open: boolean;
  items: DropdownMenuType[];
  onClose: () => void;
};

export const DropdownMenu = ({ open, items, onClose }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className="absolute z-10 w-[512px] px-xxs py-[12px] top-[32px] left-0 bg-dark-cyan"
    >
      <ul
        className={` ${getPseudoBorder({
          size: 'md',
        })} py-[12px] px-xs before:border-black`}
      >
        {items.map((item, index) => (
          <DropdownButton key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};
