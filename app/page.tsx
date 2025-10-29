export default function Home() {
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
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Bienvenue sur mon application 🚀
        </h2>
        <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
          Ceci est une page d’accueil Next.js personnalisée avec un vrai layout.
          Tu peux maintenant ajouter des fonctionnalités, des pages et connecter
          ton backend.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Commencer
          </a>
          <a
            href="#"
            className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            En savoir plus
          </a>
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
