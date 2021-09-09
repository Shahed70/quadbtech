import React, { useContext } from "react";
import "./dataGraph.css";
import crown from "../assets/images/crown.png";
import { ThemeContext } from "../App";
function DataGraph() {
  const {dark} = useContext(ThemeContext)
  return (
    <div className="py-4 text-center data_table">
      <table className="table table-borderless main_table">
        <thead>
          <tr className="">
            <th className={`${dark ? "":"td_dark"}`}>
              <h4>#</h4>
            </th>
            <th className={`${dark ? "":"td_dark"}`}>
              <h4>Platform</h4>
            </th>
            <th className={`${dark ? "":"td_dark"}`}>
              <h4>Last Traded Price</h4>
            </th>
            <th className={`${dark ? "":"td_dark"}`}>
              <h4>Buy / Sell Price</h4>
            </th>
            <th className={`${dark ? "":"td_dark"}`}>
              <h4>Difference</h4>
            </th>
            <th className={`${dark ? "":"td_dark"}`}>
              <h4>Savings</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="my-4">
            <th  className={`${dark ? "":"td_dark"}`}>1</th>
            <td  className={`${dark ? "":"td_dark"}`}>
              <img src={crown} alt="" /> Mark
            </td>
            <td className={`${dark ? "":"td_dark"}`}>Otto</td>
            <td className={`${dark ? "":"td_dark"}`}>@m</td>
            <td className={`${dark ? "":"td_dark"}`}>@md</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
          </tr>

          <tr className=" text-light">
            <th className={`${dark ? "":"td_dark"}`}>1</th>
            <td className={`${dark ? "":"td_dark"}`}>
              <img src={crown} alt="" /> Mark
            </td>
            <td className={`${dark ? "":"td_dark"}`}>Otto</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
          </tr>
          <tr className=" text-light">
            <th className={`${dark ? "":"td_dark"}`}>1</th>
            <td className={`${dark ? "":"td_dark"}`}>
              <img src={crown} alt="" /> Mark
            </td>
            <td className={`${dark ? "":"td_dark"}`}>Otto</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
          </tr>
          <tr className=" text-light">
            <th className={`${dark ? "":"td_dark"}`}>1</th>
            <td className={`${dark ? "":"td_dark"}`}>
              <img src={crown} alt="" /> Mark
            </td>
            <td className={`${dark ? "":"td_dark"}`}>Otto</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
          </tr>
          <tr className=" text-light">
            <th  className={`${dark ? "":"td_dark"}`}>1</th>
            <td className={`${dark ? "":"td_dark"}`}>
              <img src={crown} alt="" /> Mark
            </td>
            <td className={`${dark ? "":"td_dark"}`}>Otto</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
            <td className={`${dark ? "":"td_dark"}`}>@mdo</td>
          </tr>
        </tbody>
      </table>
      {/* <table className="table table-borderless">
        <thead>
          <tr className="">
            <th scope="col"> <h4>#</h4> </th>
            <th scope="col"><h4>Platform</h4></th>
            <th scope="col"><h4>Last Traded Price</h4></th>
            <th scope="col"><h4>Buy / Sell Price</h4></th>
            <th scope="col"><h4>Difference</h4></th>
            <th scope="col"><h4>Savings</h4></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-secondary text-light">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr className="bg-secondary text-light">
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr className="bg-secondary text-light">
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr className="bg-secondary text-light">
            <th scope="row">4</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr className="bg-secondary text-light">
            <th scope="row">5</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default DataGraph;
