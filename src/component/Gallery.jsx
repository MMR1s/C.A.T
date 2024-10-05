import ".././assets/css/Gallery.css";
import Gallery1 from ".././assets/images/gallery-1.png";
import Gallery2 from ".././assets/images/gallery-4.jpg";
import Gallery3 from ".././assets/images/gallery-2.png";
import Gallery4 from ".././assets/images/gallery-3.jpg";
import Gallery5 from ".././assets/images/gallery-5.jpg";
import Gallery6 from ".././assets/images/gallery-6.jpg";
import Gallery7 from ".././assets/images/gallery-7.jpg";
import Gallery8 from ".././assets/images/gallery-8.jpeg";

export default function Gallery() {
  return (
    <>
      {" "}
      {/* About Section */}
      <div className="gallery-section">
        {" "}
        <div className="gallery-main">
          {" "}
          <div className="gallery-info">
            {" "}
            <div className="gallery-text">
              {" "}
              <h2>GALLERY</h2>{" "}
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur. Risus interdum posuere
                blandit rhoncus tellus ultrices eget.{" "}
              </p>{" "}
            </div>{" "}
            <button>View more</button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="gallery-images">
          <div>
            <img src={Gallery1} alt="" className="img1" />
            <img src={Gallery2} alt="" className="img2" />
          </div>
          <div>
            <img src={Gallery3} alt="" className="img3" />
            <img src={Gallery4} alt="" className="img4" />
          </div>
          <div>
            <img src={Gallery5} alt="" className="img5" />
            <img src={Gallery6} alt="" className="img6" />
          </div>
          {/* <img src={Gallery7} alt="" className="img7" />
          <img src={Gallery8} alt="" className="img8" /> */}
        </div>
      </div>{" "}
    </>
  );
}
