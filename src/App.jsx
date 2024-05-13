import { Hero, PopularProdruct, SuperQulity, Services, SpsicalOffer, CastomerReviews, Subscribe, Footer
} from "./sections";
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
      <Nav/> 
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProdruct/>
    </section>
    <section className="padding">
      <SuperQulity/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpsicalOffer/>
    </section>
    <section className="bg-pale-blue padding ">
      <CastomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className=" bg-black padding-x padding-t pd-8">
      <Footer/>
    </section> 
  </main>
);

export default App;