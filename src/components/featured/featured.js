import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  const percentage = 70;

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured_chart">
          <CircularProgressbar
            value={percentage}
            text={"70%"}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="item_title">Target</div>
            <div className="item_result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="result_amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item_title">Last Month</div>
            <div className="item_result positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="result_amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="item_title">Last Week</div>
            <div className="item_result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="result_amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
