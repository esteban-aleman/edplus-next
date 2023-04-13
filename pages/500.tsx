import { NextPageWithLayout } from './page';

const Custom500: NextPageWithLayout<null> = () => {
  return (
    <div className="centered-container">
      <h1>500 - Error Interno</h1>
      <h2>500 - Internal Error</h2>
    </div>
  );
};

export default Custom500;
