import { useRef, useState } from "react";
import { generateJSXMeshGradient } from "meshgrad";

function App() {

  const [generate, setGenerate] = useState(false);
  const [showCode, setShowCode] = useState(false);
 
  const ELEMENTS = 6;

  const ref1 = useRef();

  const generateFunction = () => {
    setGenerate(!generate);
    setShowCode(true);
  }

 

return (
<main className="min-h-screen grid place-content-center bg-black mx-auto overflow-hidden">
  <div style={generateJSXMeshGradient(ELEMENTS)} className=" relative h-[34em] w-[34em] rounded-full transition-all duration-500" />
  <div className="absolute grid place-content-center mx-auto w-full min-h-screen bg-black/80 text-white backdrop-blur-3xl p-8">
    <div className={`w-10/12 mx-auto ${showCode ? 'sm:w-3/12' : null} `}>
      <div className="mb-8">
        <h1 className="text-6xl font-bold">Meshify</h1>
        <p className="max-w-sm text-sm mt-3 text-zinc-400">Meshify es una aplicación que te permite generar gradientes de malla con facilidad. Experimenta con diferentes combinaciones de colores y patrones para crear diseños impresionantes.</p>
      </div>
      <div ref={ref1} style={generateJSXMeshGradient(ELEMENTS)} className="h-64 w-full rounded-lg transition-all duration-500" />
      <button onClick={generateFunction} className="border border-zinc-700 mt-4 max-w-min bg-zinc-900/60 px-3 py-2 rounded-xl font-medium text-zinc-400 hover:bg-zinc-900/90 transition">Generar</button>

      <div className="mt-4">
      {showCode && 
          <pre className="whitespace-pre-wrap bg-black/50 p-4 rounded-lg text-sm font-mono">
              <code>
                <span className="text-blue-400">background-color: </span>
                <span className="text-zinc-400">{ref1.current.style.backgroundColor}</span>
              </code>
              <br />
              <code>
                <span className="text-blue-500">background-image: </span>
                <span className="text-zinc-400">{ref1.current.style.backgroundImage}</span>
              </code>
            
          </pre>
          
        }
      </div>
    </div>

  </div>

</main>
)
}

export default App