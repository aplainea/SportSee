import PropTypes from "prop-types";

export default function DailyActivityTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        console.log(payload[0].value);
        return (
            <>
                <div className="activity-tooltip">
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}kCal`}</p>
                </div>
            </>
        );
    }
    return null;
}

DailyActivityTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.object),
};
