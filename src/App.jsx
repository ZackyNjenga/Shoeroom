import Nav from './components/Nav.jsx';
import {
    CustomerReviews, Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality
} from "./sections/index.js";


const App = () => (
    <main className="relative">
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero/>
        </section>
        <section className="padding">
            <PopularProducts/>
        </section>
        <section className="padding">
            <SuperQuality/>
        </section>
        <section className="padding">
            <Services/>
        </section>
        <section className="padding">
            <SpecialOffer/>
        </section>
        <section className="padding">
            <CustomerReviews/>
        </section>
        <section className="padding-x sm:p-32 py-16 w-full">
            <Subscribe/>
        </section>
        <section className="padding bg-black padding-x padding-t pb-8">
            <Footer/>
        </section>
    </main>
);

export default App;
