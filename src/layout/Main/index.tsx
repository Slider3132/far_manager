import { Sidebar } from '@/components/Sidebar';
import { CATALOGS } from '@/constants/data';

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'bg-dark-blue flex flex-1 px-xxs gap-xxs'}>
      <div className="flex-1 w-1/2 relative z-0">
        <Sidebar catalogs={CATALOGS} />
      </div>
      <div className="flex-1 w-1/2 relative z-0">{children}</div>
    </div>
  );
};
