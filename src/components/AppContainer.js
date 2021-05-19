import Footer from './Footer';
import Header from './Header';

export default function AppContainer({ children, rest }) {
  return (
    <>
      <Header />
      <main className="mx-auto px-4 md:px-0 text-gray-900 dark:text-white" {...rest}>
        {children}
      </main>
      <Footer />
    </>
  );
}
