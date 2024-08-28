import { BottomSpace } from '@/components/BottomSpace';
import { Directory } from '@/components/Directory';
import { DIRECTORIES } from '@/constants/data';
import { getPseudoBorder } from '@/utils';

export const RootModule = () => {
  return (
    <section className="flex flex-col h-full">
      <div className="text-center text-lg bg-light-cyan">
        <span className="bg-dark-blue px-sm">C:\</span>
      </div>
      <div
        className={`flex flex-1 p-xs pt-0 ${getPseudoBorder({
          size: 'md',
          none: ['top'],
        })}`}
      >
        <div
          className={`flex flex-1 flex-col ${getPseudoBorder({
            size: 'sm',
            none: ['top'],
          })}`}
        >
          <div className="flex-1 flex">
            <Directory
              className={`w-1/3 overflow-hidden ${getPseudoBorder({
                size: 'md',
                none: ['top', 'bottom', 'left'],
              })}`}
              title="Name"
              directories={DIRECTORIES}
            />
            <Directory
              className="w-1/3 overflow-hidden"
              title="Name"
              directories={[]}
            />
            <Directory
              className={`w-1/3 overflow-hidden ${getPseudoBorder({
                size: 'md',
                none: ['top', 'bottom', 'right'],
              })}`}
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
