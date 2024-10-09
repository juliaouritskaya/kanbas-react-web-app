import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";
export default function Lab2() {
    return (
        <div className="container">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
                Style attribute allows configuring look and feel
                right on the element. Although it's very convenient
                it is considered bad practice and you should avoid
                using the style attribute
            </p>
            <ForegroundColors/>
            <BackgroundColors/>
            <Borders/>
            <Padding/>
            <Margins/>
            <Corners/>
            <Dimensions/>
            <Positions/>
            <Zindex/>
            <Float/>
            <GridLayout/>
            <Flex/>
            <ReactIconsSampler/>
            <BootstrapGrids/>
            <ScreenSizeLabel/>
            <BootstrapTables/>
            <BootstrapLists/>
            <BootstrapForms/>
            <BootstrapNavigation/>
        </div>
    );
}

