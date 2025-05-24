import './index.css';

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">¿Has tenido un accidente de tráfico?</h1>
        <p className="text-lg md:text-xl mb-6">Reclama tu indemnización con ayuda legal experta. Cobramos solo si tú cobras.</p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl shadow-md hover:bg-gray-200">Solicita revisión gratuita</button>
      </section>
    </main>
  );
}
