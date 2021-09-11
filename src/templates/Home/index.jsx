import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import * as Styled from './style';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className={`container`}>
          <div className={`constent`}>
            <Heading isUppercase>January brings us firefox 85</Heading>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
