
export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-4 pt-28 pb-12 max-w-5xl mx-auto">
      
      {/* Layout 2 colonnes : Texte à gauche, Photo à droite */}
      <div className="grid md:grid-cols-12 gap-8 items-center mb-12">
        
        {/* COLONNE GAUCHE (Titre + Présentation + Coordonnées) */}
        <div className="md:col-span-7 text-left order-2 md:order-1">
          
          {/* Badge de statut */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            En recherche active : Stage Technique & Alternance
          </div>

          {/* Grand Salut & Nom */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-3 text-slate-100">
            Salut , moi c'est <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Fady Taleha
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-400 font-medium mb-4">
            Développeur Junior & Futur Ingénieur en IA & Data
          </p>

          <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
            Passionné par le développement web full-stack, le traitement de données, l'architecture système et l'intelligence artificielle.
          </p>

          {/* Coordonnées & Infos rapides */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-xs md:text-sm text-slate-300 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            
            {/* Email */}
            <a 
              href="talehafady@gmail.com" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              talehafady@gmail.com
            </a>

            <span className="text-slate-700 hidden sm:inline">•</span>

            {/* Téléphone */}
            <a 
              href="tel:+33630399265" 
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +33 6 30 39 92 65 
            </a>

            <span className="text-slate-700 hidden sm:inline">•</span>

            {/* Localisation */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Massy, France
            </div>
          </div>
        </div>

        {/* COLONNE DROITE (Image avec effet modern/glow) */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* Halo lumineux dégradé en arrière-plan */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>
            
            {/* Conteneur de la photo */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-2">
              <img 
                src= "/img/imgfady.JPG"
                alt="Fady Taleha" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Parcours Académique (Timeline rapide) */}
      <div className="w-full text-left bg-slate-900 border border-slate-800/80 p-6 rounded-2xl mb-8">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          Parcours Académique
        </h3>

        <div className="space-y-4 border-l-2 border-slate-800 ml-2 pl-4">
          <div>
            <span className="text-xs font-mono text-emerald-400">En cours (Bachelor 2)</span>
            <h4 className="font-bold text-slate-200">Bachelor 2 — IA & Data Science</h4>
            <p className="text-xs text-slate-400">Spécialisation en développement logiciel, algorithmique et traitement de données.</p>
          </div>

          <div>
            <span className="text-xs font-mono text-blue-400">Bachelor 1</span>
            <h4 className="font-bold text-slate-200">Bachelor 1 — Informatique & Développement</h4>
            <p className="text-xs text-slate-400">Bases fondamentales du web, programmation et administration système Linux.</p>
          </div>

          <div>
            <span className="text-xs font-mono text-slate-500">Baccalauréat</span>
            <h4 className="font-bold text-slate-200">Baccalauréat Scientifique</h4>
            <p className="text-xs text-slate-400">Solides bases en mathématiques et raisonnement logique.</p>
          </div>
        </div>
      </div>

      {/* Boutons d'Action */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-medium transition-all shadow-lg shadow-blue-500/25 cursor-pointer text-white"
        >
          Voir mes projets
        </a>
        <button
          onClick={() => {
            navigator.clipboard.writeText('talehafady@gmail.com');
            alert('Email copié dans le presse-papier !');
          }}
          className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-medium transition-all cursor-pointer text-slate-200 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 002 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Copier l'email
        </button>
      </div>

    </section>
  );
}