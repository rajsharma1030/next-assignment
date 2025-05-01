'use client';
import { useState } from 'react';
import {
  HomeIcon,
  FileTextIcon,
  DollarSignIcon,
  BarChartIcon,
  UsersIcon,
  HelpCircleIcon,
} from 'lucide-react';
import Image from 'next/image';
import '../bill/bill.css';

export default function ReviewBillsPage() {
  const [activeTab, setActiveTab] = useState('Accounting');

  const tabs = [
    { name: 'Dashboard', icon: <HomeIcon size={18} /> },
    { name: 'Accounting', icon: <FileTextIcon size={18} /> },
    { name: 'Banking', icon: <DollarSignIcon size={18} /> },
    { name: 'Reports', icon: <BarChartIcon size={18} /> },
    { name: 'Contacts', icon: <UsersIcon size={18} /> },
    { name: 'Queries', icon: <HelpCircleIcon size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-20 bg-violet-700 text-white flex flex-col py-6 shadow-lg">
        <div className="text-xl font-bold mb-6 text-center">
          <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="shadow-md m-auto"
              />
        </div>
        <div className="space-y-2">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex flex-col items-center py-2 cursor-pointer transition-all duration-300 ease-in-out ${
                activeTab === tab.name ? 'bg-active text-white' : 'hover:bg-[#5e3edc] hover:text-white'
              }`}
            >
              {tab.icon}
              <span className="text-sm font-medium mt-2">{tab.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto px-4 py-3 text-sm text-white/80">Help</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Section (Header + Main Content) */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 bg-white border-b">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-black">Review</span>
              <select className="border border-[#6b5bff] rounded px-4 py-2 text-sm text-black">
                <option>Google</option>
                <option>Facebook and inst</option>
              </select>
              <span className="text-sm text-green-600 bg-green-100 rounded px-4 py-1">Quickbook Data</span>
            </div>
            <div className="flex items-center gap-2">
            <button className="text-sm bg-[#ecebfb] px-4 py-2 rounded text-violet-700 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                
              </button>
              <button className="text-sm bg-[#ecebfb] px-4 py-2 rounded text-violet-700 flex items-center gap-2">
               Export to Excel
              </button>
              <button className="text-sm bg-[#ecebfb] px-4 py-2 rounded text-violet-700 ">Add Document</button>
              <select className="border rounded px-4 py-2 border-transparent text-sm text-purple-700 bg-[#ecebfb]">
                <option>Connect</option>
              </select>
              <button className="text-sm bg-[#ecebfb] p-2 rounded">
              <Image src="/bell.svg" alt="Bell Icon" width={18} height={18} />
              </button>
              <button className="text-sm bg-[#ecebfb] p-2 rounded">
              <Image src="/gear.png" alt="Bell Icon" width={18} height={18} />
              </button>
              <button className="text-sm bg-[#ecebfb] p-2 rounded">
              <Image src="/profile.png" alt="Bell Icon" width={18} height={18} />
              </button>
            </div>
          </div>

        
          <div className=" p-8 bg-white">
            <div className='flex item-end justify-end mb-6'>
            <button className='text-white text-sm bg-violet-700 rounded px-4 py-2 '>Add to Expenses Report</button>
            </div>
          
          <div className='flex flex-1 overflow-hidden'>
            <div className="w-2/6 border-r bg-white overflow-y-auto p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">All Document</span>
                  <span className="text-sm font-semibold text-black rounded px-6 py-2 border">Bills</span>
                  <span className="text-sm text-gray-500">Receipts</span>
                </div>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="flex items-center py-3 px-2 hover:bg-gray-100 cursor-pointer border-b">
                      <img
                        src="/bill-small.png"
                        alt={`Bill ${i} thumbnail`}
                        className="w-10 h-10 mr-3 rounded"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-black">Bill {i}</div>
                        <div className="text-xs text-gray-500">Date: Nov 1, 2019</div>
                        <div className="text-xs text-gray-500">£ 50.59</div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="flex-1 flex flex-col items-center justify-center bg-[#fdf0d6] ml-4 p-6 rounded-lg shadow-inner border border-[#e3c891]">
                <Image
                  src="/invoice.png"
                  alt="Invoice"
                  width={400}
                  height={300}
                  className="shadow-md w-[320px] md:w-[400px]"
                />
                <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-gray-700 w-full px-4">
                  <div><strong>Total:</strong> ₹ 650.99</div>
                  <div><strong>Tax:</strong> ₹ 45.99</div>
                  <div><strong>Bill Date:</strong> Nov 3, 2019</div>
                  <div><strong>Due Date:</strong> Nov 20, 2019</div>
                </div>
              </div>
          </div>
            {/* Bill List */}
           

            {/* Center Image (Invoice) */}
            
          </div>
        </div>

        {/* Right Section (Details Panel) */}
        <div className="w-1/4 p-4 bg-white overflow-y-auto text-sm h-screen">
          <div className="rounded p-4 border border-gray-100 mb-3 bg-white text-black">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    QB
                  </div>
                  <div className="font-semibold">Quickbook <span className='text-xs text-gray-400  font-normal block'>16 June, 2024 | 8:15 PM</span></div>
                </div>
                <div className="text-xs text-gray-400">
                  Publishing - <span className="text-gray block">Jimmy Jesson</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span>AUTO-SYNC</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span>SAVE CONFIG</span>
                </label>
              </div>
            </div>
          
          <textarea
            rows={4}
            placeholder="Type Comment..."
            className="w-full p-2 border rounded mb-2"
          />

          <button className="border w-full py-2 rounded text-[#7452F3] mb-2">Add Comment</button>
          <button className="bg-[#7452F3] text-white w-full py-2 rounded">View Line Items</button>

          <div className="payment-form">
            <h3 className="form-title">Payment Details</h3>
            <div className="radio-group">
              <label><input type="radio" name="payment" defaultChecked /> Paid</label>
              <label><input type="radio" name="payment" /> Unpaid</label>
            </div>

            <div className="form-group">
              <label>Bill Number</label>
              <input type="text" placeholder="Start Typing..." />
            </div>

            <div className="form-group">
              <label>Bill Date</label>
              <input type="text" placeholder="Start Typing..." />
            </div>

            <div className="form-group">
              <label>Paid Amount</label>
              <input type="text" placeholder="£ 0.00" />
            </div>

            <div className="form-group">
              <label>Paid Date</label>
              <input type="text" placeholder="Start Typing..." />
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <input type="text" placeholder="Start Typing..." />
            </div>

            <div className="form-group">
              <label>Payment Mode</label>
              <select>
                <option>Select Payment Mode</option>
              </select>
            </div>

            <div className="form-group">
              <label>Currency</label>
              <select>
                <option>Select Currency</option>
              </select>
            </div>

            <div className="form-group">
              <label>Bank Transaction Ref</label>
              <input type="text" placeholder="Start Typing..." />
            </div>

            <div className="form-group">
              <label>Total Amount</label>
              <input type="text" placeholder="Enter Amount" />
            </div>

            <div className="form-group">
              <label>Tax Amount</label>
              <input type="text" placeholder="Enter Tax" />
            </div>

            <div className="form-group">
              <label>Total Amount (GBP)</label>
              <input type="text" placeholder="Enter Amount" />
            </div>

            <div className="form-group">
              <label>Tax Amount (GBP)</label>
              <input type="text" placeholder="Enter Tax" />
            </div>

            <div className="form-group">
              <label>FX Rate</label>
              <input type="text" placeholder="Enter FX Rate" />
            </div>

            <h3 className="form-title">Description</h3>
            <div className="radio-group">
              <label><input type="radio" name="desc" defaultChecked /> Single</label>
              <label><input type="radio" name="desc" /> Multiple</label>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea rows="4" placeholder="Enter Description"></textarea>
            </div>

      

            <div className="action-buttons flex flex-col">
              <button className="btn-light  w-full">Save</button>
              <button className="btn-primary w-full">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}