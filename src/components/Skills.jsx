import { useState } from 'react'

const skillsData = [
  // Développement & Web
  { name: 'C ', category: 'dev', level: 90 },
  { name: 'PHP', category: 'dev', level: 70 },
  { name: 'Python', category: 'dev', level: 60 },
  { name: 'JavaScript / React', category: 'dev', level: 50 },
  { name: 'SQL & Database Design', category: 'dev', level: 80 },
  { name: 'HTML5 / CSS3 / Tailwind', category: 'dev', level: 85 },

  // Systèmes & Réseau
  { name: 'Linux System Admin & Bash', category: 'sys', level: 60 },
  { name: 'Subnetting VLSM / Cisco Packet Tracer', category: 'sys', level: 40 },
  { name: 'UTM / Virtualization (Ubuntu on macOS)', category: 'sys', level: 40 },

  // Data & Analyse
  { name: 'Excel & Sales Analytics', category: 'data', level: 80 },
  { name: 'Grafana ', category: 'data', level: 50 },
  { name: 'Advanced Calculus & Math', category: 'data', level: 90 },
]

export default function Skills() {
  // 1. Initialisation du State (par défaut : 'all' pour tout afficher)
  const [activeCategory, setActiveCategory] = useState('all')

  // 2. Filtrage des compétences selon la catégorie active
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory)

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Compétences <span className="text-blue-400">Techniques</span>
      </h2>

      {/* Boutons de Filtre */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {[
          { id: 'all', label: 'Toutes' },
          { id: 'dev', label: 'Dev & Web' },
          { id: 'sys', label: 'Systèmes & Réseau' },
          { id: 'data', label: 'Data & Math' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-blue-600 text-white shadow-lg '
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grille des Compétences */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-slate-200">{skill.name}</span>
              <span className="text-xs font-mono text-blue-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}