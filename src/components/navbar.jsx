import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

export default function Navbar() {
  const [showQR, setShowQR] = useState(false)

  // URL de ton portfolio (remplace par ton lien Vercel/Netlify une fois déployé)
  const portfolioUrl = typeof window !== 'undefined' ? window.location.href : 'https://portfolio-fady-pkyeg2ydu-fady-b51a.vercel.app'

  return (
    <>
      {/* Navbar Fixe avec effet de verre (Backdrop Blur) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo / Monogramme */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center font-black text-slate-950 text-sm shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              FT
            </div>
            <span className="font-bold text-slate-200 tracking-tight group-hover:text-blue-400 transition-colors">
              Fady Taleha
            </span>
          </a>

          {/* Bouton d'action QR Code */}
          <button
            onClick={() => setShowQR(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-emerald-400 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 1 0 001-1V5a1 1 1 0 00-1-1H5a1 1 1 0 00-1 1v2a1 1 1 0 001 1zm12 0h2a1 1 1 0 001-1V5a1 1 1 0 00-1-1h-2a1 1 1 0 00-1 1v2a1 1 1 0 001 1zM5 20h2a1 1 1 0 001-1v-2a1 1 1 0 00-1-1H5a1 1 1 0 00-1 1v2a1 1 1 0 001 1z" />
            </svg>
            Mon QR Code CV
          </button>
        </div>
      </header>

      {/* MODALE QR CODE */}
      {showQR && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm w-full text-center relative shadow-2xl">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-slate-100 mb-1">Scannez pour voir mon Portfolio</h3>
            <p className="text-xs text-slate-400 mb-6">Accès immédiat à mon portfolio & compétences sur web </p>

            {/* Génération dynamique du QR Code */}
            <div className="bg-white p-4 rounded-2xl inline-block shadow-inner mb-6">
              <QRCodeSVG value={portfolioUrl} size={180} />
            </div>

            <p className="text-xs font-mono text-slate-500 break-all mb-4">
              {portfolioUrl}
            </p>

            <button
              onClick={() => setShowQR(false)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium rounded-xl text-slate-200 transition-all cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  )
}