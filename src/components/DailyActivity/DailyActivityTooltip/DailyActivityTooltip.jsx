import PropTypes from "prop-types";

/**
 * Renders a tooltip for daily activity.
 * @param {Object} props - The props object.
 * @param {boolean} props.active - Whether the tooltip is active or not.
 * @param {Array} props.payload - The payload data for the tooltip.
 * @returns {JSX.Element} - The tooltip component.
 */
export default function DailyActivityTooltip({ active, payload }) {
    if (active && payload && payload.length) {
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
