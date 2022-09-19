
import {useState,useEffect} from "react"

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async( ) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=Rwy4FaRvaxwj6CPWSrF5JI1uPsGIO0q6&q=${category}&limit=10`;
        fetch(url)
        .then(res => res.json())
        .then(data => setImages(data.data)) 
        
        setIsLoading(false);
       //En este ejemplo estoy haciendo llamados a la API de dos diferentes maneras, una es usando el archivo getGiifs
        //y pasándole la categoría como parámetro, la otra es esta usando fetch como se uso en el proyecto (meme-generator)
       
       //getGifs( category );    

   }
   

    useEffect(() => {
    
        getImages();

    },[] )
    
    return ({
        images,
        isLoading
    })

}
