import Image from 'next/image';

const projects = [
  {
    img: '',
    title: 'is it safe for my pet?',
    description: '',
    status: 'in progress',
    techStacks: ['nextjs', 'gemini API'],
    url: 'https://norainanordin.com',
  },
  {
    img: '',
    title: 'etsy scraper',
    description:
      'Collect product name, price, number of download for that product and product URL appears on search result page using Selenium.',
    status: 'github',
    techStacks: ['python', 'flask', 'selenium'],
    url: 'https://github.com/ainacodes/etsy_product_list',
  },
  {
    img: '',
    title: 'Automated send WhatsApp bulk',
    description:
      'Sending WhatsApp to list of recipients from CSV file automatically.',
    status: 'github',
    techStacks: ['python', 'flask', 'PyWhatKit'],
    url: 'https://github.com/ainacodes/AutomatedWhatsappBulk',
  },
];

export default function MyProjects() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto py-4">
        <h2 className="text-gray-600 text-3xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <figure className="relative w-full h-48">
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {project.title}
                  <div
                    className={`badge ${
                      project.status.toLowerCase() === 'in progress'
                        ? 'badge-neutral'
                        : project.status.toLowerCase() === 'live'
                        ? 'badge-accent'
                        : project.status.toLowerCase() === 'unmaintain' ||
                          project.status.toLowerCase() === 'terminate'
                        ? 'badge-secondary'
                        : project.status.toLowerCase() === 'github'
                        ? 'badge-ghost text-black'
                        : 'badge-ghost text-black'
                    }`}
                  >
                    {project.status}
                  </div>
                </h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end flex-wrap">
                  {project.techStacks.map((tech, techIndex) => (
                    <div key={techIndex} className="badge badge-outline">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
