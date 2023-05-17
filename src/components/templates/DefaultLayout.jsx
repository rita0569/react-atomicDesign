import { Footer } from "../atom/layout/Footer";
import { Header } from "../atom/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header style={{ height: "50px", backgroundColor: "red" }}></Header>
      {children}
      <Footer />
    </>
  );
};
