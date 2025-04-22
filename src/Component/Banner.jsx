  
  
  
  
  import image  from './../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
  
  
  
  const Banner = () => {
    return (
      <div className="bg-[#FFF8F5] py-16">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left text content */}
          <div className="md:w-1/2 text-center md:text-left m-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111430] leading-tight mb-4">
              BEAUTY SALON <br /> FOR EVERY WOMEN
            </h1>
            <p className="text-gray-600 mb-6">
            Unlock your true beauty at Aurahaus Spa — where elegance meets expertise. 
            From relaxing facials to flawless makeovers, we celebrate every shade of you.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 transition text-white px-6 py-3 rounded-md font-medium">
              Get an Appointment
            </button>
          </div>
  
          {/* Right image */}
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Beauty Salon"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  