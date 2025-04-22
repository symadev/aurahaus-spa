

const ServiceCardDetails = ({card}) => {
    const {logo,treatment,balance,description} = card;



    return (
       
        <div className="card bg-base-100  w-72 shadow-md p-6">
        <figure className="px-12 pt-4">
          <img
            src={logo}
            alt="logo"
            className="rounded-xl w-16" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{treatment}</h2>
          <p>{balance}</p>
          <p className="text-sm">{description}</p>

        </div>
      </div>
      
    );
};

export default ServiceCardDetails;