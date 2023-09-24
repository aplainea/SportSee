import PropTypes from "prop-types";

import CaloriesIcon from "../../assets/calories-icon.svg";
import CarbsIcon from "../../assets/carbs-icon.svg";
import LipidsIcon from "../../assets/lipids-icon.svg";
import Protein from "../../assets/protein-icon.svg";

/**
 * A component that displays a label and a value with an icon.
 * @param {Object} props - The props object.
 * @param {string} props.label - The label to display.
 * @param {number} props.value - The value to display.
 * @returns {JSX.Element} - The CardKeysInfos component.
 */
export default function CardKeysInfos({ label, value }) {
    /**
     * Object containing icons for different keys information.
     * @typedef {Object} KeysInfosIcons
     * @property {string} Calories - Icon for calories.
     * @property {string} Proteines - Icon for proteins.
     * @property {string} Glucides - Icon for carbohydrates.
     * @property {string} Lipides - Icon for lipids.
     */
    const keysInfosIcons = {
        Calories: CaloriesIcon,
        Proteines: Protein,
        Glucides: CarbsIcon,
        Lipides: LipidsIcon,
    };

    /**
     * Gets the unit based on the label.
     *
     * @param {string} label - The label to check.
     * @returns {string} The unit to use.
     */
    const unit = label === "Calories" ? "kCal" : "g";

    return (
        <div className="card-keys-infos">
            <img
                className="icon"
                src={keysInfosIcons[label]}
                alt={label + " icon"}
            />
            <div className="text">
                <p className="text-value">
                    {value}
                    {unit}
                </p>
                <p className="text-label">{label}</p>
            </div>
        </div>
    );
}

CardKeysInfos.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};
