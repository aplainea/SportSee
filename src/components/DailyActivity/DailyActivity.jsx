import moment from "moment";
import PropTypes from "prop-types";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import DailyActivityTooltip from "./DailyActivityTooltip/DailyActivityTooltip";

/**
 * Renders a daily activity chart with kilogram and calories data.
 * @param {Object} props - The component props.
 * @param {Array} props.data - The data to be displayed in the chart.
 * @returns {JSX.Element} - The DailyActivity component.
 */
export default function DailyActivity({ data }) {
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barGap={10}>
                    <text x={0} y={20} fill="rgba(32, 37, 58, 1))">
                        <tspan>Activité quotidienne</tspan>
                    </text>
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize={10}
                        height={65}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        padding={{ left: -50, right: -50 }}
                        dx={0}
                        height={70}
                        tickMargin={15.5}
                        tickFormatter={(value) => moment(value).format("D")}
                    />
                    <YAxis
                        dataKey="kilogram"
                        yAxisId="kilogram"
                        orientation="right"
                        tickCount={3}
                        tickLine={false}
                        axisLine={false}
                        width={50}
                        tickMargin={16}
                    />
                    <YAxis
                        dataKey="calories"
                        yAxisId="calories"
                        orientation="left"
                        hide
                    />
                    <Tooltip
                        offset={50}
                        label={false}
                        content={<DailyActivityTooltip />}
                        wrapperStyle={{ outline: "none" }}
                    />
                    <Bar
                        name="Poids (kg)"
                        dataKey="kilogram"
                        yAxisId="kilogram"
                        barSize={7}
                        radius={[20, 20, 0, 0]}
                        fill="rgba(32, 37, 58, 1)"
                    />
                    <Bar
                        name="Calories brûlées (kCal)"
                        dataKey="calories"
                        yAxisId="calories"
                        barSize={7}
                        radius={[20, 20, 0, 0]}
                        fill="rgba(255, 1, 1, 1)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

DailyActivity.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string.isRequired,
            kilogram: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
};
