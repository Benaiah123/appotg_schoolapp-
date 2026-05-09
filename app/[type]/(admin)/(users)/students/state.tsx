'use client';

import { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    if (!query.trim()) {
      setResult('Please enter a search term.');
      return;
    }

    // Fake "next" search behavior – this is where you'd call an API or fetch more results
    setResult(`Searching for "${query}"... (next results loading)`);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Next Search Bar</h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search something..."
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Next
          </button>
        </div>
        {result && (
          <p className="mt-4 text-gray-700 italic">
            {result}
          </p>
        )}
      </div>
    </main>
  );
}
