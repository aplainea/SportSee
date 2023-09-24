import PropTypes from "prop-types";
import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    Legend,
    ResponsiveContainer,
} from "recharts";
import AverageScoreLegend from "./AverageScoreLegend/AverageScoreLegend";

export default function AverageScore({ data }) {
    const score = Math.round(data * 100);
    const dataRiadialBar = [{ score: score, fill: "rgba(255, 0, 0, 1)" }];

    return (
        <>
            <ResponsiveContainer width="100%" height={260}>
                <RadialBarChart
                    data={dataRiadialBar}
                    innerRadius="70%"
                    startAngle={90}
                    endAngle={450}
                    className="score-radial"
                >
                    <PolarAngleAxis
                        dataKey="score"
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                    <RadialBar dataKey="score" cornerRadius={10} />
                    <text className="score-radial-text">
                        <tspan x={25} y={30}>
                            Score
                        </tspan>
                    </text>
                    <Legend
                        content={<AverageScoreLegend data={score} />}
                        verticalAlign="middle"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </>
    );
}

AverageScore.propTypes = {
    data: PropTypes.number.isRequired,
};
