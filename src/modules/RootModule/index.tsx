import { BottomSpace } from '@/components/BottomSpace';
import { Directory } from '@/components/Directory';
import { Divider } from '@/components/Divider';
import { DIRECTORIES } from '@/constants/data';

export const RootModule = () => {
  return (
    <section className="flex flex-col h-full">
      <div className="text-center text-lg bg-light-cyan">
        <span className="bg-dark-blue px-sm">C:\</span>
      </div>
      <div className="flex flex-1 border-4 border-t-0">
        <div className="flex flex-1 border-2 border-t-0 flex-col m-xxs mt-0">
          <div className="flex-1 flex">
            <Directory
              className="w-1/3 overflow-hidden"
              title="Name"
              directories={DIRECTORIES}
            />
            <Divider />
            <Directory
              className="w-1/3 overflow-hidden"
              title="Name"
              directories={[]}
            />
            <Divider />
            <Directory
              className="w-1/3 overflow-hidden"
              title="Name"
              directories={[]}
            />
          </div>
          <BottomSpace description="DN" />
        </div>
      </div>
    </section>
  );
};
