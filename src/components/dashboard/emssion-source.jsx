import { FaYoutube, FaSlack, FaGoogleDrive, FaQuestionCircle } from 'react-icons/fa';
import { SiZoom } from 'react-icons/si';
import { MdComputer } from 'react-icons/md';

const EmissionSource = () => {
    const sources = [
        { name: 'YouTube', icon: <FaYoutube className="text-red-500" />, value: '420 tCO₂e', percent: '28%' },
        { name: 'Zoom', icon: <SiZoom className="text-blue-500" />, value: '300 tCO₂e', percent: '20%' },
        { name: 'Slack', icon: <FaSlack className="text-purple-500" />, value: '220 tCO₂e', percent: '15%' },
        { name: 'Google Drive', icon: <FaGoogleDrive className="text-yellow-500" />, value: '190 tCO₂e', percent: '13%' },
        { name: 'Web Browsing', icon: <MdComputer className="text-emerald-500" />, value: '140 tCO₂e', percent: '10%' },
        { name: 'Other', icon: <FaQuestionCircle className="text-gray-500" />, value: '180 tCO₂e', percent: '14%' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Emissions by Source</h3>
                <button className="text-sm text-emerald-600 hover:text-emerald-700">View All</button>
            </div>

            <div className="space-y-4">
                {sources.map((src, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 flex items-center justify-center">{src.icon}</div>
                            <span className="text-sm text-gray-700">{src.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">{src.value}</span>
                            <span className="text-xs text-gray-500">{src.percent}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmissionSource;
