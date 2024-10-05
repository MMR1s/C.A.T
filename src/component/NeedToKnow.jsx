import NeedToKnowPicture from "../assets/images/needtoknow.png";
import "../assets/css/NeedToKnow.css";

export default function NeedToKnow() {
  return (
    <div className="need-to-know-section">
      <div className="need-to-know-content">
        <h1 className="title">CLASSES</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Nisl lorem tristique feugiat
          est tortor auctor et. Egestas risus quis donec quis metus. Nunc quam
          pretium elit vulputate nulla et risus.
        </p>
        <ul className="classes-list">
          <li>Precision Archery</li>
          <li>Aim. Thrive. Connect</li>
          <li>Bullseye Crafters</li>
          <li>Where Passion Meets Precision</li>
          <li>Unleash Your Arrow, Unite With Archers</li>
          <li>Your Journey Into Archery Excellence</li>
        </ul>
        <button className="cta-button">Join Now</button>
      </div>
    </div>
  );
}
