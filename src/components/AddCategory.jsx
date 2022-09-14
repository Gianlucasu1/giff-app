import {useState} from "react";
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = ( event ) => {
        setInputValue(event.target.value);
    }

    const addCat = (event) => {

        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue );
        setInputValue('');

    }

    return (
    <form onSubmit={ addCat }>
        <input className="input-add-cat"onChange={ handleChange } type="text" placeholder="Buscar Gif" value ={ inputValue }></input>
        <button>Agregar Categoría</button>
    </form>)
}