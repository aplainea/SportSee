import PropTypes from "prop-types";

/**
 * Renders a tooltip displaying the duration of a session.
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Whether the tooltip is active or not.
 * @param {Array} props.payload - The data payload of the tooltip.
 * @returns {JSX.Element} - The SessionDurationTooltip component.
 */
export default function SessionDurationTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <>
                <div className="session-tooltip">
                    <p>{`${payload[0].value} min`}</p>
                </div>
            </>
        );
    }
    return null;
}

SessionDurationTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.object),
};
