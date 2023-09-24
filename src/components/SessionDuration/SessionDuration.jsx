import PropTypes from "prop-types";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import SessionDurationTooltip from "./SessionDurationTooltip/SessionDurationTooltip";

/**
 * Renders a line chart displaying the average session duration for each day of the week.
 * @param {Object} props - The component props.
 * @param {Array} props.data - An array of objects containing the session duration data for each day of the week.
 * @returns {JSX.Element} - The rendered component.
 */
export default function SessionDuration({ data }) {
    /**
     * Returns the weekday letter corresponding to the given index.
     * @param {number} index - The index of the weekday (1 for Monday, 2 for Tuesday, etc.).
     * @returns {string} - The corresponding weekday letter (L for Monday, M for Tuesday, etc.).
     * If the index is not between 1 and 7, returns "Index invalide".
     */
    function getWeekdayLetter(index) {
        const weekdays = ["L", "M", "M", "J", "V", "S", "D"];

        if (index >= 1 && index <= 7) {
            const weekdayIndex = index - 1;
            return weekdays[weekdayIndex];
        } else {
            return "Index invalide";
        }
    }

    /**
     * Maps the data array to add a dayLetter property to each item using the getWeekdayLetter function.
     * @param {Array} data - The data array to map.
     * @returns {Array} - The mapped array with the dayLetter property added to each item.
     */
    const dataWithDayLetter = data.map((item) => ({
        ...item,
        dayLetter: getWeekdayLetter(item.day),
    }));

    return (
        <>
            <ResponsiveContainer width="100%" height={260}>
                <LineChart
                    data={dataWithDayLetter}
                    className="line-chart"
                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                >
                    <text className="line-chart-text">
                        <tspan x={30} y={35}>
                            Durée moyenne des
                        </tspan>
                        <tspan x={30} y={55}>
                            sessions
                        </tspan>
                    </text>

                    <YAxis domain={["dataMin-20", "dataMax+20"]} hide={true} />

                    <XAxis
                        dataKey="dayLetter"
                        tickLine={false}
                        axisLine={false}
                        opacity="0.5"
                        stroke="rgba(255, 255, 255, 1)"
                    />

                    <Tooltip
                        content={<SessionDurationTooltip />}
                        cursor={false}
                    />

                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 1)"
                        strokeWidth={1.6}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

SessionDuration.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.number.isRequired,
            sessionLength: PropTypes.number.isRequired,
        })
    ).isRequired,
};
