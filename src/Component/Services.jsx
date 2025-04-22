import image from '../assets/images/sleep mask.png'

const Services = () => {
    return (
        <div>
              <section className="bg-[#FFF7F5] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src={image}
            alt="Facial Treatment"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let us handle your screen{" "}
            <span className="text-pink-500">Professionally.</span>
          </h2>
          <p className="text-gray-600 mb-6">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>

          {/* Stats */}
          <div className="flex space-x-10">
            <div>
              <p className="text-3xl font-bold text-pink-500">500+</p>
              <p className="text-gray-700 mt-1">Happy Customer</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-500">16+</p>
              <p className="text-gray-700 mt-1">Total Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Services;