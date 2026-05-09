'use client';

import { useState } from 'react';
import Image from "next/image";
export interface Student {
  name: string;
  class: string;
  section: string;
  email: string;
}

interface Props {
  student: Student;
}

export default function StudentCard({ student }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-md shadow p-4 mb-2 transition">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <Image src="/images/Ellipse 8.png" alt='icon' width={24} height={24}/>
          <h2 className="font-medium text-sm md:text-base">{student.name}</h2>
        </div>
        <Image src="/icons/ph_caret-down-bold (2).png" className='cursor-pointer' alt='icon' width={20} height={20}/>
      </div>

      {isOpen && (
        <div className="mt-4 text-sm text-gray-700">
          <p>
            <strong>Class:</strong> {student.class}
          </p>
          <p>
            <strong>Section:</strong> {student.section}
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${student.email}`} className="text-blue-500">
              {student.email}
            </a>
          </p>
          <div className="mt-2 flex gap-2">
            <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600">
              View ID Card
            </button>
            <button className="bg-gray-200 text-xs px-3 py-1 rounded hover:bg-gray-300">
              Manage Student
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
