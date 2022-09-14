import React from 'react'
import {getGifs} from '../getGiffs'

export const GifGrid = ({category}) => {

    

    React.useEffect(() => {

        //En este ejemplo estoy haciendo llamados a la API de dos diferentes maneras, una es usando el archivo getGiifs
        // y pasándole la categoría como parámetro, la otra es esta usando fetch como se uso en el proyecto (meme-generator)

        const url = `https://api.giphy.com/v1/gifs/search?api_key=Rwy4FaRvaxwj6CPWSrF5JI1uPsGIO0q6&q=${category}&limit=10`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
        //getGifs( category );

    }, [] )



    

    	
    return (
        <>
            <h3>{category}</h3>
            <p>Hola mundo</p>
        </>
    )
}
