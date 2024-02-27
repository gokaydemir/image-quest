import ImageItem from "./ImageItem";

function ImageList({ imagePlaceholder }) {
  return (
    <div className="container">
      <div className="imageContainer mt-5 row grid gap-0 row-gap-4">
        {imagePlaceholder.map((image, index) => {
          return <ImageItem key={index} imageItem={image} />
        })}
      </div>
    </div>

  );
}

export default ImageList;