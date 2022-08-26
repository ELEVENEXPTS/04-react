import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./Gifgrid";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['first categorie'])
    

    const onAddCategory = (category) => {
        
        
        setCategories( list => [...list, category])
        
    }

    

    return (

        <>
        
        <h1>GiftExpert</h1>
        <AddCategory onAddCategory={onAddCategory}>
        
        {
            categories.map(
                (category, key) =>
                {
                    return <GifGrid category = {category} key={key}></GifGrid>
                }
            )

            }
        
        
        
        </AddCategory>

        

        </>



    )


}