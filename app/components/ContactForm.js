import CalendlyWidget from '../components/CalendlyWidget';

export default function ContactForm() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div>
        <div className="mr-4">
          <h2 className="text-gray-600 text-3xl font-bold text-center ">
            Need a custom solution for your business?
          </h2>
          <div className="py-4">
            <CalendlyWidget />
          </div>
        </div>
      </div>
      <div className="card bg-base-100 p-6 shadow-xl">
        <div>
          <h3 className="text-gray-600 text-2xl font-bold text-center ">
            Leave me a message
          </h3>
          <p className="text-center mb-12">I will get back to you shortly</p>
        </div>

        <div className="flex flex-col gap-4 items-end px-4">
          <div className="container mx-auto flex flex-col gap-4">
            <label className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered rounded-md"
              />
            </label>
            <label className="form-control">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered rounded-md"
              />
            </label>
            <label className="form-control">
              <input
                type="number"
                placeholder="Your budget in USD"
                className="input input-bordered rounded-md"
              />
            </label>
            <label className="form-control">
              <textarea
                className="textarea textarea-bordered h-24 rounded-md text-base"
                placeholder="Share your requirements"
              ></textarea>
            </label>
          </div>
          <div>
            <button className="btn btn-primary text-gray-700 transition duration-300">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
