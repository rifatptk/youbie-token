import "./why.css";
import tick from "../../assets/images/ok.png";

const Why = () => {
  return (
    <div className="why-section py-5">
      <div className="container">
        <h1 id="why-title">WHY YOUBIE?</h1>
        <h5 id="subtitle">Competitor comparison</h5>

        <table className="GeneratedTable">
          <thead>
            <tr>
              <th>FEATURES</th>
              <th>YOUBIE</th>
              <th>TWITCH</th>
              <th>YOUTUBE</th>
              <th>YOUNOW</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Live Streaming</td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
            </tr>
            <tr>
              <td>NFT Marketplace</td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
            </tr>
            <tr>
              <td>Premium Subscription Content</td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
            </tr>
            <tr>
              <td>E-Sports / Onsite Tournaments for all</td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
            </tr>
            <tr>
              <td>Physical Merchandise Store for Creators</td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
            </tr>
            <tr>
              <td>Cryptocurrency Support</td>
              <td>
                <img className="tick" src={tick} alt="" />
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
              <td>
                <h1 className="x">X</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Why;
