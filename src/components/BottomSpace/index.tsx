import { getPseudoBorder } from '@/utils';

export const BottomSpace = ({ description }: { description: string }) => {
  return (
    <div
      className={`${getPseudoBorder({
        size: 'md',
        none: ['bottom', 'left', 'right'],
      })} px-xs py-md `}
    >
      {description}
    </div>
  );
};
