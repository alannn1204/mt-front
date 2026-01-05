import {
  MapPinIcon,
  CalendarIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function SearchBox() {
  return (
    <div className="bg-rose-700/60 p-6 rounded-md shadow-lg backdrop-blur-sm
                    grid grid-cols-1 md:grid-cols-5 gap-4 w-full max-w-5xl">

      {/* From */}
      <div className="relative md:col-span-1">
        <MapPinIcon className="w-5 h-5 text-gray-600 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Origin"
          className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full text-sm
                     focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* To */}
      <div className="relative md:col-span-1">
        <MapPinIcon className="w-5 h-5 text-gray-600 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Destination"
          className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full text-sm
                     focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Departure Date */}
      <div className="relative md:col-span-1">
        <CalendarIcon className="w-5 h-5 text-gray-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="date"
          className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full text-sm
                     focus:ring-2 focus:ring-blue-500 text-gray-400 focus:text-gray-700 focus:outline-none"
        />
      </div>

      {/* No of Pax */}
      <div className="relative md:col-span-1">
        <UserGroupIcon className="w-5 h-5 text-gray-600 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="number"
          min="1"
          placeholder="No. of Pax"
          className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full text-sm
                     focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Search Button */}
      <button
        className="flex items-center justify-center gap-2
                   bg-gradient-to-r from-slate-900 to-slate-700
                   text-white rounded-md px-4 py-2 text-sm
                   hover:opacity-90 transition md:col-span-1"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
        Search
      </button>
    </div>
  );
}
