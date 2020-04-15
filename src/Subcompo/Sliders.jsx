import React, { Component } from "react";

import { Slider, Slide, Caption, image, placement } from "react-materialize";

class Sliders extends Component {
  render() {
    return (
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 600,
          fullscreen: true,
          indicators: true,
          interval: 3000
        }}
      >
        <Slide
          image={
            <img
              alt=""
              src="/rooms.jpg"
            />
          }
        >
          <Caption placement="center">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="/living1.jpg"
            />
          }
        >
          <Caption placement="left">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="fordcar.jpg"
            />
          }
        >
          <Caption placement="right">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={
            <img
              alt=""
              src="/electronics.jpg"
            />
          }
        >
          <Caption placement="center">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>
      </Slider>
    );
  }
}
export default Sliders;
