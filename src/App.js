import './App.css';
import SearchHeader from './SearchHeader';
import searchImage from './Api';
import { useState } from 'react';
import ImageList from './ImageList';

function App() {
const [images, setImages] = useState([])
 
  const handleSubmit = async (term) => {
  const result= await searchImage(term);
  setImages(result);
  }

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagePlaceholder={images}></ImageList>
    </div>
  );
}

export default App;
