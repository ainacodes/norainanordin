import { FaRobot, FaCogs, FaUserTie } from 'react-icons/fa';

const services = [
  {
    icon: <FaRobot className="text-4xl text-purple-500" />,
    title: 'Custom AI Chatbot',
    description:
      'Enhance customer interactions with intelligent chatbots tailored to your business needs.',
  },
  {
    icon: <FaCogs className="text-4xl text-purple-500" />,
    title: 'Make.com Automation',
    description:
      'Streamline your workflows and boost productivity with custom Make.com automations.',
  },
  {
    icon: <FaUserTie className="text-4xl text-purple-500" />,
    title: 'Virtual Assistant',
    description:
      'Get comprehensive support for your business operations with our virtual assistant services.',
  },
];

export default function Services() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto py-4">
        <h2 className="text-gray-600 text-3xl font-bold text-center mb-12">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 p-6 shadow-xl">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-gray-600 text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
