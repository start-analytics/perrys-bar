import "./gallery.css";

const ImageGallery = ({ url }) => {
  return (
    <div className="col-lg-3 col-md-4 gallery-item">
      <a href={url} className="glightbox" data-gallery="images-gallery">
        <img
          src={url}
          alt=""
          className="img-fluid w-100 object-fit-cover gallery-img"
        />
      </a>
    </div>
  );
};

export default ImageGallery;
