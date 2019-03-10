import React from "react";

const Skycons = require("skycons")(window);

export default class TodaysWeather extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  selectIcon = (iconDescription) => {
    switch (iconDescription) {
        case "clear-day":
            return Skycons.CLEAR_DAY
        case "clear-night":
            return Skycons.CLEAR_NIGHT
        case "rain":
            return Skycons.RAIN 
        case "snow":
            return Skycons.SNOW;
        case "sleet":
            return Skycons.SLEET;
        case "wind":
            return Skycons.WIND
        case "fog":
            return Skycons.FOG
        case "cloudy":
            return Skycons.CLOUDY
        case "partly-cloudy-day":
            return Skycons.PARTLY_CLOUDY_DAY
        case "partly-cloudy-night":
            return Skycons.PARTLY_CLOUDY_NIGHT
        default: 
            return Skycons.CLEAR_DAY
    }
}

  render() {
    return (
      <div className="App">
        <canvas ref={this.ref} width="128" height="128" />
      </div>
    );
  }

  componentDidMount() {
    const selectedIcon = this.selectIcon(this.props.icon);
    const skycons = new Skycons({ color: "red" });
    skycons.add(this.ref.current, selectedIcon);
    skycons.play();
  }
}
