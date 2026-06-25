import Navbar from "../components/Navbar";
import profile from "../assets/AmanDagar.jpeg";

export default function About() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />

      <div className="min-h-screen bg-neutral-900 text-white px-10 py-10">
        <div className="max-w-5xl mx-auto bg-neutral-800 rounded-xl shadow-xl p-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={profile}
              alt="Aman Dagar"
              className="w-64 h-64 rounded-full object-cover border-4 border-pink-500 shadow-xl"
            />

            <div>
              <p className="text-sky-400 text-lg">~ whoami</p>

              <h1 className="text-5xl font-bold mt-3">
                Hey, I'm <span className="text-pink-500">Aman</span> 👋
              </h1>

              <p className="text-xl text-gray-300 mt-4">
                Electrical Engineering Student | MERN Stack Developer |
                Competitive Programmer
              </p>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                I am <strong>Aman Dagar</strong>, a third-year B.Tech student in
                Electrical Engineering at
                <strong> NIT Delhi</strong>.
                <br />
                <br />
                I am passionate about building full-stack web applications using
                the MERN Stack and solving Data Structures & Algorithms
                problems.
                <br />
                <br />I enjoy learning modern web technologies, developing
                real-world projects, and continuously improving my
                problem-solving skills for Software Development Engineer roles.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-pink-500">Interests</h2>

            <div className="grid md:grid-cols-2 gap-5 mt-6">
              <div className="bg-neutral-700 rounded-lg p-5">
                💻 MERN Stack Development
              </div>

              <div className="bg-neutral-700 rounded-lg p-5">
                ⚡ Data Structures & Algorithms
              </div>

              <div className="bg-neutral-700 rounded-lg p-5">
                📊 SQL & MongoDB
              </div>

              <div className="bg-neutral-700 rounded-lg p-5">
                🚀 Software Development
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-pink-500">Skills</h2>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "C++",
                "Python",
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "SQL",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-pink-500 px-5 py-2 rounded-full text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold text-pink-500">Achievements</h2>

            <ul className="list-disc ml-6 mt-5 space-y-3 text-lg">
              <li>🏆 Solved 300+ DSA Problems</li>

              <li>💻 Built Full Stack MERN Projects</li>

              <li>🎯 Preparing for SDE Internships</li>

              <li>🎓 B.Tech Electrical Engineering - NIT Delhi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
