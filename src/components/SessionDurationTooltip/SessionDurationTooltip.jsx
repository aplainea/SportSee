import PropTypes from "prop-types";

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
