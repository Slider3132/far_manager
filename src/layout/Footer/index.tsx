import { CommandLine } from '@/components/CommandLine';
import { FooterMenu } from '@/components/FooterMenu';
import { FOOTER_BUTTONS } from '@/constants/data';

export const Footer = () => {
  return (
    <div className="">
      <CommandLine />
      <FooterMenu items={FOOTER_BUTTONS} />
    </div>
  );
};
