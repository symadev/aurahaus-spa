import Banner from "../Component/Banner";
import ContactForm from "../Component/ContactForm";
import ServiceCard from "../Component/ServiceCard";
import Services from "../Component/Services";
import TestimonialCard from "../Component/TestimonialCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCard></ServiceCard>
            <Services></Services>
            <ContactForm></ContactForm>
            <TestimonialCard></TestimonialCard>
            
        </div>
    );
};

export default Home;