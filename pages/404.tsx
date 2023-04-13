import { NextPageWithLayout } from './page';

const Custom404: NextPageWithLayout<null> = () => {
  return (
    <div className="centered-container">
      <h1>404 - Pagina no encontrada</h1>
      <p>Oops! Parece que esta pagina no existe</p>
      <br></br>
      <h2>404 - Page Not Found</h2>
      <p>Oops! Looks Like this page does not exist</p>
    </div>
  );
};

export default Custom404;
