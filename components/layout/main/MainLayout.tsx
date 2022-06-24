import { Header } from 'components/layout';
import { MainLayoutProps } from './MainLayoutProps';

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
