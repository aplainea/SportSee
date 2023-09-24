import PropTypes from "prop-types";

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
