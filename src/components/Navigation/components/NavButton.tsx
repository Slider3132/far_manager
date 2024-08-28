type Props = React.LiHTMLAttributes<HTMLLIElement> & {
  title: string;
};

export const NavButton = ({ title, className, children, ...rest }: Props) => {
  return (
    <li
      {...rest}
      className={`hover:text-white hover:bg-black px-lg text-black cursor-pointer first-letter:text-yellow ${className}`}
    >
      {children}
    </li>
  );
};
