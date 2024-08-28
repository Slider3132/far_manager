import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
