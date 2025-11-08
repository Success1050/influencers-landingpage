export default function ArtistInfoCard() {
  return (
    <div className="bg-gray-100 rounded-lg shadow-sm max-w-sm">
      <div className="divide-y divide-gray-300">
        {/* Fee Range Row */}
        <div className="flex px-6 py-3">
          <div className="w-32 text-gray-700 font-medium">Fee Range:</div>
          <div className="flex-1 text-gray-500">Please Contact</div>
        </div>

        {/* Availability Row */}
        <div className="flex px-6 py-3">
          <div className="w-32 text-gray-700 font-medium">Availability:</div>
          <div className="flex-1 text-gray-500">Please Contact</div>
        </div>

        {/* Years Active Row */}
        <div className="flex px-6 py-3">
          <div className="w-32 text-gray-700 font-medium">Years Active:</div>
          <div className="flex-1 text-gray-700">1988–Present</div>
        </div>

        {/* Genre Row */}
        <div className="flex px-6 py-3">
          <div className="w-32 text-gray-700 font-medium">Genre:</div>
          <div className="flex-1">
            <a href="#" className="text-blue-600 hover:underline">
              Country
            </a>
            <span className="text-gray-700">, </span>
            <a href="#" className="text-blue-600 hover:underline">
              Modern Country
            </a>
            <span className="text-gray-700">, </span>
            <a href="#" className="text-blue-600 hover:underline">
              Male Vocalists
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
