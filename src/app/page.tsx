"use client";
import { useState } from "react";

export default function Home() {
  const [spec, setSpec] = useState("");
  const [blueprint, setBlueprint] = useState<any>(null);
  const [zipUrl, setZipUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateBlueprint = async () => {
    setLoading(true);
    setBlueprint(null);
    setZipUrl(null);

    try {
      const res = await fetch("/api/blueprint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ spec }),
      });

      const data = await res.json();

      if (data.error) {
        console.error("Error:", data.error);
        alert(`Error: ${data.error}`);
      } else {
        setBlueprint(data.blueprint);
      }
    } catch (error) {
      console.error("Failed to generate blueprint:", error);
      alert("Failed to generate blueprint. Check console for details.");
    }

    setLoading(false);
  };

  const generateApp = async () => {
    setLoading(true);
    setZipUrl(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blueprint }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error:", errorData.error);
        alert(`Error: ${errorData.error}`);
      } else {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setZipUrl(url);
      }
    } catch (error) {
      console.error("Failed to generate app:", error);
      alert("Failed to generate app. Check console for details.");
    }

    setLoading(false);
  };

  return (
    <main className="p-8 min-h-screen bg-neutral-950 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ShipFoundry – AI App Builder
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT PANEL */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-xl font-semibold mb-4">Describe your app</h2>

          <textarea
            className="w-full h-60 p-3 rounded bg-neutral-800 border border-neutral-700 focus:outline-none"
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
            placeholder="Example: A budgeting dashboard with auth, analytics and a transactions table."
          />

          <button
            onClick={generateBlueprint}
            disabled={loading}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
          >
            {loading ? "Generating..." : "Generate Blueprint"}
          </button>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <h2 className="text-xl font-semibold mb-4">Output</h2>

          {!blueprint && (
            <p className="text-neutral-400">Your blueprint will appear here.</p>
          )}

          {blueprint && (
            <pre className="bg-neutral-800 p-4 rounded overflow-x-auto text-sm whitespace-pre-wrap">
              {JSON.stringify(blueprint, null, 2)}
            </pre>
          )}

          {blueprint && (
            <button
              onClick={generateApp}
              disabled={loading}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold"
            >
              {loading ? "Generating..." : "Generate Downloadable App"}
            </button>
          )}

          {zipUrl && (
            <a
              href={zipUrl}
              download="shipfoundry_app.zip"
              className="block mt-4 text-center bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold"
            >
              Download App
            </a>
          )}
        </div>
      </div>
    </main>
  );
}