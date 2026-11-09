import { useState } from 'react'

const projectsData = [
  {
    id: 1,
    title: "Pawsync  Web Platform",
    tag: "Full-Stack",
    desc: "Développement d'une plateforme web dédiée à la protection animale, permettant aux propriétaires, vétérinaires et refuges d'interagir, de partager des informations et de faciliter la prise en charge des animaux.",
    tech: ["PHP", "SQL/MySQL", "JavaScript", "HTML5/CSS3" ,"Bootstrap" , "MAMP(local)" ,"InfinityFree(host)"],
    details: "Conception et développement d'une application web avec plusieurs types d'utilisateurs et des fonctionnalités de gestion des animaux, de signalement, de favoris, de notifications et de messagerie. Création d'une base de données relationnelle pour gérer les utilisateurs, les animaux et les signalements. Mise en place d'interfaces dynamiques et d'une architecture organisée en plusieurs pages.",
    statut : true ,
    link : "https://pawsync.free.nf"
},
  {
    id: 2,
    title: "Portfolio Fady — Portfolio personnel interactif",
    tag: "Front-End",
    desc: "Création d'un portfolio personnel interactif pour présenter mon parcours, mes compétences techniques et mes réalisations, tout en approfondissant mes connaissances en développement Front-End et React.",
    tech: ["React", "JavaScript ES6+", "JSX","HTML5","Tailwind CSS" , "Vite(local)"],
    details: "Développement d'un portfolio personnel avec React et Tailwind CSS. Ce projet constitue une mise en pratique des fondamentaux de React, notamment les composants réutilisables, la gestion des états avec useState, le rendu dynamique avec map(), le filtrage des données et l'affichage conditionnel. Il m'a également permis de renforcer ma maîtrise de JavaScript moderne, JSX, HTML et CSS, ainsi que de découvrir les bonnes pratiques de structuration d'une application React.",
    statut : true,
    link : null
},
  {
    id: 3,
    title: "E-Commerce Web Platform",
    tag: "Full-Stack",
    desc: "Développement d'une plateforme e-commerce pour accompagner le développement de l'activité commerciale de mon frère, avec une gestion centralisée des produits, des commandes et des clients",
    tech: ["Python", "SQL", "JavaScript", "HTML/CSS"],
    details: "Conception d'une solution e-commerce personnalisée destinée à digitaliser une activité commerciale existante. Le projet vise à développer une plateforme permettant de présenter les produits, gérer le catalogue, faciliter les commandes et administrer les données commerciales. L'objectif est de construire une architecture évolutive intégrant un back-end Python, des API et une base de données relationnelle.",
    statut : false,
    link : null
  },
]

export default function Projects() {
  // State pour la modale : garde en mémoire le projet sélectionné (null si aucune modale ouverte)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id = "projects" className="py-16 px-4 max-w-5xl mx-auto border-t border-slate-900">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projets <span className="text-emerald-400">Réalisés</span>
      </h2>

      {/* Grille de cartes */}
      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between group "
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {project.desc}
              </p>
            </div>

            <div>
              {/* Badges de Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-xl transition-all cursor-pointer text-slate-200"
              >
                En savoir plus 
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODALE (Fenêtre Surgissante) */}
      {selectedProject && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-200">
            
            
            <div className="flex justify-between items-center">
                {selectedProject.statut ? (
               <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Projet terminé
                </span>
             ) : (
                 <span className="px-3 py-1 rounded-full bg-yellow-500 text-white text-xs font-semibold">
                  En cours
                </span>
            )}
            </div>
            <h3 className="text-2xl font-bold mt-2 mb-4">{selectedProject.title}</h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              {selectedProject.details}
            </p>
            {selectedProject.link && (
            <a
               href={selectedProject.link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-400 hover:text-emerald-400 underline transition-colors"
             >
               Visiter le projet →
             </a>
             )
              }
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm rounded-xl"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}