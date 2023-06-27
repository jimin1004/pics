import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList"

function App() {

    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        // console.log('Do a search with', term);
        const result = await searchImages(term); // return 값이 올 때까지 기다리기
        setImages(result)
    };


    return (<div>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
    </div>)
}

export default App;