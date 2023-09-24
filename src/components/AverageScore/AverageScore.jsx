import PropTypes from "prop-types";
import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    Legend,
    ResponsiveContainer,
} from "recharts";
import AverageScoreLegend from "./AverageScoreLegend/AverageScoreLegend";

/**
 * Displays the average score as a radial bar chart.
 * @param {Object} props - The props object.
 * @param {number} props.data - The score data to be displayed.
 * @returns {JSX.Element} - The AverageScore component.
 */
export default function AverageScore({ data }) {
    /**
     * Rounds the given data to the nearest integer and multiplies it by 100 to get the score.
     * @param {number} data - The data to be converted to score.
     * @returns {number} - The score rounded to the nearest integer.
     */
    const score = Math.round(data * 100);
    /**
     * Data for the radial bar chart displaying the average score.
     * @typedef {Object} DataRiadialBar
     * @property {number} score - The average score to display.
     * @property {string} fill - The color to fill the radial bar with.
     */
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
