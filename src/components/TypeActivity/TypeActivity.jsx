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

export default function TypeActivity({ data }) {
    const labelsEnFrancais = {
        cardio: "Cardio",
        energy: "Energie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité",
    };

    // transforme les données pour les rendre compatibles avec le radar chart
    const performanceData = data.data.map((d) => ({
        value: d.value,
        kind: labelsEnFrancais[data.kind[d.kind]],
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
