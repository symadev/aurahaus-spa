import { useEffect, useState } from "react";

import { motion } from 'framer-motion';
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
            <ServiceCardDetails card={card} key={card.cardId} />
          ))
        }
      </div>

      {/* Centered Button Below the Grid */}
      <div className="flex justify-center mt-10">
        <motion.button
          className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-md font-medium"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Explore More
        </motion.button>
      </div>
    </div>

  );
};

export default ServiceCard;