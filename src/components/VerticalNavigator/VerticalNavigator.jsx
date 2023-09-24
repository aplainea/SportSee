import yoga from "../../assets/yoga.svg";
import swin from "../../assets/swin.svg";
import bicycle from "../../assets/bicycle.svg";
import barbell from "../../assets/barbell.svg";

/**
 * Renders a vertical navigator component with icons for different sports and a copyright notice.
 * @returns {JSX.Element} The VerticalNavigator component.
 */
export default function VerticalNavigator() {
    return (
        <>
            <div className="vertical-navigator">
                <div className="icons-container">
                    <img src={yoga} alt="yoga" className="icon" />
                    <img src={swin} alt="swin" className="icon" />
                    <img src={bicycle} alt="bicycle" className="icon" />
                    <img src={barbell} alt="barbell" className="icon" />
                </div>
                <p className="copyright">Copyright, SportSee 2020</p>
            </div>
        </>
    );
}
