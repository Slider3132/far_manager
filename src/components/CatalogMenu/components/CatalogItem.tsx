type Props = {
  title: string;
};

export const CatalogItem = ({ title }: Props) => {
  return (
    <li className="relative after:h-full after:w-[4px] before:h-[4px] before:w-[24px] before:bg-light-cyan after:bg-light-cyan before:absolute after:absolute before:top-[12px] before:left-[-24px]  after:left-[-26.5px] after:top-0 last:after:h-1/2">
      {title}
    </li>
  );
};
