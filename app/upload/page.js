'use client';
import { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import '../upload/upload.css';

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const copyToClipboard = (text) => navigator.clipboard.writeText(text);

  return (
    <div className="min-h-screen bg-white px-8 py-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="flex gap-10">
          <span className="text-gray-700 font-semibold">EasyUpload</span>
          
        </div>
        <div className="flex gap-10 items-center ">
        <span className="text-gray-700">Bills</span>
          <span className="border px-4 py-1 rounded-md  text-purple-600 font-semibold">Receipts</span>
          <span className="text-gray-700">Bank</span>
        <button className="text-2xl font-bold text-gray-500">×</button>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="text-sm text-gray-500">Document Owner</label>
          <p className="font-bold mt-1 text-black">Accountant 01</p>
        </div>
        <div>
          <label className="text-sm text-gray-500">Client</label>
          <select className="mt-1 w-full border rounded px-3 py-2">
            <option>Select Client</option>
          </select>
        </div>
      </div>

      {/* Upload Area */}
      <div className="border-dashed border-2 border-gray-300 rounded-md mt-6 p-6 flex items-center justify-center text-center">
        <label className="cursor-pointer">
          <input type="file" className="hidden" onChange={handleFileChange} />
          <div>
            <div className="text-4xl">📤</div>
            <p className="text-purple-700 font-medium mt-2">Drag & Drop or Choose file to upload</p>
            <small className="text-xs text-gray-500">JPG, PNG, PDF, CVS</small>
          </div>
        </label>
      </div>

      <button className="bg-violet-600 hover:bg-indigo-700 text-white mx-auto flex rec-btn">Add Receipt</button>

      {/* Email Section */}
      <div className="mt-8 space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-black">Single :</span>
          <span className="text-violet-600 font-bold">abc.single@gmail.com</span>
          <FiCopy onClick={() => copyToClipboard('abc.single@gmail.com')} className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-black">Multiple :</span>
          <span className="text-violet-800 font-bold">abc.multiple@gmail.com</span>
          <FiCopy onClick={() => copyToClipboard('abc.multiple@gmail.com')} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
