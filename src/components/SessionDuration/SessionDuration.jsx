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

export default function SessionDuration({ data }) {
    // Fonction qui retourne la lettre du jour de la semaine en fonction de l'index
    function getWeekdayLetter(index) {
        const weekdays = ["L", "M", "M", "J", "V", "S", "D"];

        if (index >= 1 && index <= 7) {
            const weekdayIndex = index - 1;
            return weekdays[weekdayIndex];
        } else {
            return "Index invalide";
        }
    }

    // On ajoute une propriété "dayLetter" à chaque objet du tableau "data"
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
