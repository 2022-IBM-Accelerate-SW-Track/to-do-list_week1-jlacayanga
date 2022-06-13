import React, { Component } from 'react';
import "./About.css";
import IMG_5162_Original from "../assets/IMG_5162_Original.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={IMG_5162_Original}
              alt="Profile Picture"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jordyn Lacayanga</div>
            <div className="brief_description">
              <ul>
                <li>University: The New Jersey Institute of Technology</li>
                <li>Year: Junior</li>
                <li>City: Jersey City</li>
                <li>State: New Jersey</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}