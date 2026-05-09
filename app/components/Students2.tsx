"use client";
import StudentCard, { Student } from '../components/StudentCard';
import { useState } from 'react';
import Image from "next/image";
const dummyStudent: Student = {
  name: 'Afam Oluchukwu Ogboho',
  class: 'JSS 1',
  section: 'A',
  email: 'student17069@mbhs.com',
};

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [classFilter, setClassFilter] = useState('JSS 1');
  const [perPage, setPerPage] = useState(10);
  const total = 40;

  const filteredStudents = Array.from({ length: perPage }, () => dummyStudent); // Just for demo

  return (
    <div className="p-6 bg-gray-100 min-h-screen  md:hidden block">
      {/* Top controls */}
      <div className="flex flex-row items-center justify-between mb-6 gap-4">
        <input
          type="search"
          placeholder="Search for a student"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-md w-full border-black/50 max-w-sm focus-visible:outline-black"
        />
        <select
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
          className="border outline-secondary border-secondary text-secondary py-2 px-0.5 rounded-md"
        >
          <option>JSS 1</option>
          <option>JSS 2</option>
          <option>JSS 3</option>
        </select>
        <Image src="/images/Frame 24 (1).png" alt='icon' width={150} height={33}
        />
      </div>

      {/* Student list */}
      <div className="space-y-2">
        {filteredStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-2">
          <button className="border px-3 py-1 rounded bg-blue-500 text-white">1</button>
          <span className="text-gray-500">...</span>
          <button className="border px-3 py-1 rounded">10</button>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Per Page</label>
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="border px-2 py-1 rounded"
          >
            <option>10</option>
            <option>20</option>
          </select>
          <span className="text-sm text-gray-600">Total: {total}</span>
        </div>
      </div>
    </div>
  );
}
