export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Identité */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center font-black text-slate-950 text-xs">
              FT
            </div>
            <span className="font-bold text-slate-200">Fady Taleha</span>
          </div>
          <p className="text-xs text-slate-500">
            Développeur Junior • Futur Ingénieur IA & Data
          </p>
        </div>

        {/* Liens Réseaux Sociaux (LinkedIn & GitHub) */}
        <div className="flex items-center gap-4">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fady-taleha-9879153b7/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-blue-400 text-xs font-medium transition-all"
          >
            <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/fadytaleha" // Remplace par ton lien GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-all"
          >
            <svg className="w-4 h-4 fill-current text-slate-200" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            GitHub
          </a>

        </div>

      </div>

      <div className="mt-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Fady Taleha • Portfolio optimisé QR Code & Web
      </div>
    </footer>
  )
}