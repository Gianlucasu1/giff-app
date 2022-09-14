import {useState,useEffect} from "react"
import {AddCategory} from "../components/AddCategory"
import { GifGrid } from "./GifGrid";


export const GifApp = () => {
   
    const [counter, setCounter] = useState(0);
    const [ categories, setCategories ] = useState(['one punch', 'dragon ball']);
    
    const onAddCategory = ( newCategorie ) => {

        const categoriesFiltred = categories.filter(x => x === newCategorie)
        if (categoriesFiltred.length > 0) return;

        setCategories(prevCategorie => {
            return [...prevCategorie, newCategorie]
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