import { useEffect, useState } from "react";



import ServiceCardDetails from "./ServiceCardDetails";


const ServiceCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('cardinfo.json')
      .then(res => res.json())
      .then(data => setCards(data))

  }, []);

  return (
    <div className="m-10">
      <h1 className="text-5xl font-bold text-center m-10">
        Our Awesome <span className="text-pink-500">Services</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {
          cards.map(card => (
            <ServiceCardDetails card={card} key={card._id} />
          ))
        }
      </div>

      {/* Centered Button Below the Grid */}
 
    </div>

  );
};

export default ServiceCard;