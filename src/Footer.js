import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: "inline-flex" }}>
        <table
          style={{
            tableLayout: "fixed",
            width: "100%",
            wordWrap: "break-word",
          }}
        >
          <tbody>
            <tr>
              <td style={{ width: "500px" }} colSpan={"2"}>
                <b>Служба поддержки работает круглосуточно</b>
              </td>
            </tr>
            <tr>
              <td style={{ width: "200px" }}>Москва</td>
              <td style={{ width: "200px" }}>
                <a href="tel:+74955678900">+7 495 567 89 00</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td style={{ width: "200px" }}>Регионы</td>
              <td style={{ width: "200px" }}>
                <a href="tel:+88005678900">+8 800 567 89 00</a>
              </td>
            </tr>
            <tr>
              <td style={{ width: "500px" }} colSpan={"2"}>
                &copy; 2007 - 2022 ПАО РОСБАНК, Генеральная лицензия №2272 от
                28.01.15
              </td>
            </tr>
          </tbody>
        </table>
        {/* {this.props.footer} */}
      </div>
    );
  }
}
