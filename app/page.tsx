"use client"; // nécessaire pour activer les hooks côté client
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Bienvenue sur mon application 🚀");
  const [color, setColor] = useState("#2563eb"); // bleu par défaut (hex)

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="w-full bg-white dark:bg-gray-900 shadow-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            MonApp
          </h1>
          <nav className="flex gap-6 text-gray-700 dark:text-gray-300">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Accueil
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              À propos
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold" style={{ color }}>
          {message}
        </h2>

        {/* Champ pour modifier le texte */}
        <input
          type="text"
          placeholder="Écris ton propre message..."
          className="mt-6 rounded border px-4 py-2"
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Sélecteur de couleur */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <label className="text-gray-700 dark:text-gray-300">
            Choisis une couleur :
          </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="h-10 w-20 cursor-pointer"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} MonApp. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
