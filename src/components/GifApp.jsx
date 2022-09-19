import {useState,useEffect} from "react"

import {AddCategory,GifGrid} from "../components/index";


export const GifApp = () => {
   
    const [ categories, setCategories ] = useState(['one punch', 'dragon ball']);
    
    const onAddCategory = ( newCategorie ) => {

        const categoriesFiltred = categories.filter(x => x === newCategorie)
        if (categoriesFiltred.length > 0) return;

        setCategories(prevCategorie => {
            return [newCategorie, ...prevCategorie]
        })
        
    }

    


    

    return (
        <>
            <h1>GIF APP</h1>
            <AddCategory onNewCategory={value => onAddCategory(value)}/>
            
            { categories.map( (category) => {
                return (
                    <GifGrid key={category} category={category}/>
                )
            } ) }
            
            
            
        </>
    )
}