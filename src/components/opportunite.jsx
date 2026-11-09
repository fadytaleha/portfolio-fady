export default function Opportunity() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto border-t border-slate-900">
      <div className="text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
          Objectif Professionnel
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
          À la recherche d'une <span className="text-blue-400">Opportunité</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-2">
          Étudiant motivé en Bachelor 2 IA & Data, prêt à apporter de la valeur concrète sur des projets de développement et d'analyse de données.
        </p>
      </div>

      {/* Grille des 2 formats d'opportunité */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        
        {/* Card 1 : Stage */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-all">
          <div className="absolute top-0 right-0 bg-blue-600/10 text-blue-400 text-xs font-mono font-bold px-3 py-1 rounded-bl-xl border-l border-b border-blue-500/20">
            Juin 2027
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 font-bold text-lg">
            01
          </div>
          <h3 className="text-xl font-bold mb-1 text-slate-100">Stage Technique</h3>
          <p className="text-xs font-mono text-emerald-400 mb-4">Durée : 2 à 3 mois (À partir de Juin)</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Immersion pratique pour renforcer vos équipes de développement web, d'administration système ou de gestion de données. Idéal pour valider un projet court terme avec un profil réactif et autonome.
          </p>
        </div>

        {/* Card 2 : Alternance */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
          <div className="absolute top-0 right-0 bg-emerald-600/10 text-emerald-400 text-xs font-mono font-bold px-3 py-1 rounded-bl-xl border-l border-b border-emerald-500/20">
            Bachelor 3
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-bold text-lg">
            02
          </div>
          <h3 className="text-xl font-bold mb-1 text-slate-100">Alternance (Bachelor 3)</h3>
          <p className="text-xs font-mono text-blue-400 mb-4">Rythme École / Entreprise</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Engagement sur la 3ᵉ année de Bachelor pour accompagner la montée en charge de vos pipelines Data, intégrations IA et projets d'ingénierie logicielle avec une vision long terme.
          </p>
        </div>

      </div>

      {/* Mes Motivations & Atouts pour l'entreprise */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-200">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Pourquoi collaborer ensemble ?
        </h3>
        
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
            <h4 className="font-semibold text-blue-400 mb-1">Polyvalence Technique</h4>
            <p className="text-slate-400 text-xs">À l'aise aussi bien en Front-End (React/Tailwind) qu'en Back-End & SQL, administration Linux et réseaux.</p>
          </div>

          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
            <h4 className="font-semibold text-emerald-400 mb-1">Orientation IA & Data</h4>
            <p className="text-slate-400 text-xs">Capacité à comprendre le traitement de données, les algorithmes mathématiques et la visualisation de métriques.</p>
          </div>

          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
            <h4 className="font-semibold text-purple-400 mb-1">Capacité d'Adaptation</h4>
            <p className="text-slate-400 text-xs">Apprentissage rapide des nouvelles stacks techniques, rigueur dans le code et culture d'ingénierie.</p>
          </div>
        </div>
      </div>
    </section>
  )
}