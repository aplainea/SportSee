import PropTypes from "prop-types";

/**
 * Renders the legend for the average score component.
 * @param {Object} props - The component props.
 * @param {number} props.data - The percentage of the user's goal achieved.
 * @returns {JSX.Element} - The rendered component.
 */
function AverageScoreLegend({ data }) {
    return (
        <div className="score-legend-container">
            <p className="score-legend-score">{data}%</p>
            <p className="score-legend-description">de votre objectif</p>
        </div>
    );
}

AverageScoreLegend.propTypes = {
    data: PropTypes.number.isRequired,
};

export default AverageScoreLegend;
