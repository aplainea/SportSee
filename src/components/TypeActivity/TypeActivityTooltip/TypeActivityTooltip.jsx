import PropTypes from "prop-types";

export default function TypeAcitivityTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="type-activity-tooltip">
                <p>{`Kind: ${data.kind}`}</p>
                <p>{`Value: ${data.value}`}</p>
            </div>
        );
    }
    return null;
}

TypeAcitivityTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.object),
};
