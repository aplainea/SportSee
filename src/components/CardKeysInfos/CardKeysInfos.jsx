import PropTypes from "prop-types";

import CaloriesIcon from "../../assets/calories-icon.svg";
import CarbsIcon from "../../assets/carbs-icon.svg";
import LipidsIcon from "../../assets/lipids-icon.svg";
import Protein from "../../assets/protein-icon.svg";

const keysInfosIcons = {
    Calories: CaloriesIcon,
    Proteines: Protein,
    Glucides: CarbsIcon,
    Lipides: LipidsIcon,
};

export default function CardKeysInfos({ label, value }) {
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
