type Sides = 'top' | 'bottom' | 'left' | 'right';

type PseudoBorderType = {
  size: 'sm' | 'md';
  none?: Sides[];
};

export const getPseudoBorder = (props: PseudoBorderType) => {
  const { size = 'md', none } = props;
  const border = size === 'sm' ? `before:border-2` : 'before:border-4';

  let noBorders = '';

  if (none?.length) {
    none.includes('top') && (noBorders += ' before:border-t-0 ');
    none.includes('right') && (noBorders += ' before:border-r-0');
    none.includes('bottom') && (noBorders += ' before:border-b-0');
    none.includes('left') && (noBorders += ' before:border-l-0');
  }

  return `relative before:z-[-1] before:absolute before:top-0 before:left-0 before:w-full before:h-full ${border} ${noBorders}`;
};
