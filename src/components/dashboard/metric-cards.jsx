import { FaVideo, FaEnvelope, FaGithub, FaLeaf } from "react-icons/fa";

const metrics = [
    {
        name: "Zoom Meetings",
        icon: <FaVideo className="text-blue-600" />,
        bg: "bg-blue-100",
        value: 1.3,
        unit: "kg CO₂e / hr",
        change: -4.2,
    },
    {
        name: "Emails",
        icon: <FaEnvelope className="text-green-600" />,
        bg: "bg-green-100",
        value: 0.05,
        unit: "kg CO₂e / email",
        change: +1.1,
    },
    {
        name: "GitHub Activity",
        icon: <FaGithub className="text-gray-700" />,
        bg: "bg-gray-100",
        value: 0.02,
        unit: "kg CO₂e / commit",
        change: -2.6,
    },
    {
        name: "Tree Offset Equivalent",
        icon: <FaLeaf className="text-emerald-600" />,
        bg: "bg-emerald-100",
        value: 2.5,
        unit: "trees saved",
        change: +0.8,
    },
];

const MetricCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {metrics.map((metric, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <div className={`w-8 h-8 ${metric.bg} rounded-lg flex items-center justify-center`}>
                                {metric.icon}
                            </div>
                            <span className="text-gray-700 font-medium">{metric.name}</span>
                        </div>
                    </div>
                    <div className="mb-2">
                        <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                        <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span
                            className={`text-xs px-2 py-1 rounded-full ${metric.change < 0
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                        >
                            {metric.change > 0 ? "+" : ""}
                            {metric.change}%
                        </span>
                        <span className="text-xs text-gray-500">vs last period</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MetricCards;
