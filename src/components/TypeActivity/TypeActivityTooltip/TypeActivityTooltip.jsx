import PropTypes from "prop-types";

/**
 * Renders a tooltip for a type of activity.
 * @param {Object} props - The component props.
 * @param {boolean} props.active - Whether the tooltip is active or not.
 * @param {Array} props.payload - The data payload for the tooltip.
 * @returns {JSX.Element} - The rendered tooltip component.
 */
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
