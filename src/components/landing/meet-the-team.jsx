import img1 from '../../assets/landing/dev1.jpg'
import img2 from '../../assets/landing/dev2.jpg'
import img3 from '../../assets/landing/dev3.jpg'
const developers = [
  {
    name: 'Daniel Smith',
    role: 'Frontend Developer',
    bio: 'Passionate about crafting responsive and intuitive user interfaces. Daniel leads the design system architecture.',
    image: img1,
  },
  {
    name: 'Amara Johnson',
    role: 'Backend Engineer',
    bio: 'Focused on building scalable and secure systems. Amara ensures robust performance behind the scenes.',
    image: img2,
  },
  {
    name: 'Tomi Adewale',
    role: 'DevOps & Infrastructure',
    bio: 'Loves automating workflows and deploying clean pipelines. Tomi ensures smooth production deployments.',
    image: img3,
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 bg-blac/20 text-center" id="team">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-white">Meet the Developers</h2>
        <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
          We're a passionate team of engineers building digital sustainability solutions for small teams and growing businesses.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {developers.map((dev, idx) => (
            <div
              key={idx}
              className="bg-white/10 p-6 rounded-2xl shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{dev.name}</h3>
              <p className="text-sm text-white">{dev.role}</p>
              <p className="text-sm text-white mt-3">{dev.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
