function ImageItem({ imageItem }) {
    const imageUrl = imageItem.urls.small;
    const imageDescription = imageItem.urls.description;
    console.log(imageItem.urls)

    return (
        <div className="imageList col-sm-6 col-md-4 col-lg-4">
            <img src={imageUrl} alt={imageDescription}></img>
        </div>
    );
}

export default ImageItem;