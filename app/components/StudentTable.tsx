// components/StudentTable.tsx
"use client";
import Image from 'next/image';
import { useState } from 'react';

const students = Array(10).fill({
  name: 'Afam Oluchukwu Ogboho',
  class: 'JSS 1',
  section: 'A',
  email: 'student17069@mbhs.com',
  imageUrl: '/images/Ellipse 8.png',
});

export default function StudentTable() {
  const [perPage, setPerPage] = useState(10);

  return (
    <div className="min-h-screen bg-white px-6 py-4 md:block hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-600 border-b border-gray-300">
              <th className="py-3 px-4 font-medium">Image</th>
              <th className="py-3 px-4 font-medium">Name</th>
              <th className="py-3 px-4 font-medium">Class</th>
              <th className="py-3 px-4 font-medium">Section</th>
              <th className="py-3 px-4 font-medium">Email</th>
              <th className="py-3 px-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.slice(0, perPage).map((student, idx) => (
              <tr key={idx} className="border-b border-gray-200">
                <td className="py-3 px-4">
                  <Image
                    src={student.imageUrl}
                    alt="Student"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </td>
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.class}</td>
                <td className="py-3 px-4">{student.section}</td>
                <td className="py-3 px-4">{student.email}</td>
                <td className="py-3 px-4 space-x-2">
                    <div className='flex flex-row gap-2'>
                         <button className="border rounded p-1 text-sm hover:bg-gray-100">
                    View ID Card
                  </button>
                  <button className="border rounded p-1 text-sm hover:bg-gray-100">
                    Manage Student
                  </button>
                    </div>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination + Per Page */}
        <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
          {/* Pagination */}
          <div className="space-x-1">
            <button className="border rounded px-3 py-1 text-sm bg-gray-100 text-gray-700">
              Previous
            </button>
            <button className="border rounded px-3 py-1 text-sm bg-blue-600 text-white">
              1
            </button>
            <button className="border rounded px-3 py-1 text-sm">2</button>
            <button className="border rounded px-3 py-1 text-sm">3</button>
            <span className="px-2">...</span>
            <button className="border rounded px-3 py-1 text-sm">10</button>
            <button className="border rounded px-3 py-1 text-sm bg-gray-100 text-gray-700">
              Next
            </button>
          </div>

          {/* Per Page and Showing */}
          <div className="flex items-center space-x-3 text-sm text-gray-700">
            <label htmlFor="perPage">Per Page</label>
            <select
              id="perPage"
              className="border rounded px-2 py-1"
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>Showing 1 to {perPage} of 400</span>
          </div>
        </div>
      </div>
    </div>
  );
}
