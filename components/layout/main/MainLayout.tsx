import { Footer, Header } from 'components/layout';
import { footerData } from 'lib/pages-data/footer';
import { MainLayoutProps } from './MainLayoutProps';

const MainLayout = (props: MainLayoutProps) => {
  const { children, locale } = props;
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer columns={footerData.columns} locale={locale} />
    </>
  );
};

export default MainLayout;
