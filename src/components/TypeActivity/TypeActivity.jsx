import PropTypes from "prop-types";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import TypeAcitivityTooltip from "./TypeActivityTooltip/TypeActivityTooltip";

/**
 * Renders a radar chart displaying performance data for a specific type of activity.
 * @param {Object} props - The component props.
 * @param {Object} props.data - The data to be displayed on the chart.
 * @param {Array} props.data.data - An array of objects containing the performance data.
 * @param {Object} props.data.kind - An object containing the kind of activity.
 * @returns {JSX.Element} - The rendered component.
 */
export default function TypeActivity({ data }) {
    /**
     * Object containing French translations for activity types.
     * @typedef {Object} labelsInFrench
     * @property {string} cardio - Translation for "Cardio".
     * @property {string} energy - Translation for "Energie".
     * @property {string} endurance - Translation for "Endurance".
     * @property {string} strength - Translation for "Force".
     * @property {string} speed - Translation for "Vitesse".
     * @property {string} intensity - Translation for "Intensité".
     */
    const labelsInFrench = {
        cardio: "Cardio",
        energy: "Energie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité",
    };

    // transforme les données pour les rendre compatibles avec le radar chart
    /**
     * Maps the performance data to an array of objects with the value and kind properties.
     * @param {Object} data - The performance data object.
     * @param {Array} labelsInFrench - The array of labels in French.
     * @returns {Array} An array of objects with the value and kind properties.
     */
    const performanceData = data.data.map((d) => ({
        value: d.value,
        kind: labelsInFrench[data.kind[d.kind]],
    }));

    return (
        <>
            <ResponsiveContainer width="100%" height={260}>
                <RadarChart
                    data={performanceData}
                    outerRadius={75}
                    startAngle={-150}
                    endAngle={210}
                    className="radar-chart"
                >
                    <PolarGrid gridType="polygon" radialLines={false} />

                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{
                            fill: "rgba(255, 255, 255, 1)",
                        }}
                    />

                    <PolarRadiusAxis
                        tick={false}
                        tickCount={5}
                        axisLine={false}
                    />

                    <Tooltip
                        content={<TypeAcitivityTooltip />}
                        cursor={false}
                    />

                    <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
                </RadarChart>
            </ResponsiveContainer>
        </>
    );
}

TypeActivity.propTypes = {
    data: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        kind: PropTypes.objectOf(PropTypes.string).isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.number.isRequired,
                kind: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};
