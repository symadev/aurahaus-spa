

const ContactForm = () => {
    return (

        <section className="bg-[#FFF7F5] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Let us handle your <br />
          <span className="text-pink-500">project, professionally.</span>
        </h2>

        <form className="space-y-6">
          {/* Full Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm  text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm  text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm  text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm  text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm  text-gray-700 mb-1">Message</label>
            <textarea
              placeholder="Write your message here"
              className="w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 h-40 resize-none bg-white"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
    );
};

export default ContactForm;