import { motion } from "framer-motion";

const ServiceCardDetails = ({ card }) => {
  const { logo, treatment, balance, description } = card;

  return (
    <motion.div
      className="card bg-base-100 w-72  shadow-lg p-6"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 2, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <figure className="px-12 pt-4">
        <img
          src={logo}
          alt="logo"
          className="rounded-xl w-16"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{treatment}</h2>
        <p>{balance}</p>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCardDetails;
