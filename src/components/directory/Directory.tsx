import React from "react";

import DirectoryItemContainer from "../directory-item/DirectoryItem";
import "./directory.scss";

export interface Categories {
    id: number;
    title: string;
    imageUrl: string;
    route: string;
}

//no se lo pasa a firebase porque aqui definimos las rutas a redireccionarse de las paginas
//y no tiene caso subir esa propiedad a la db
const categories: Categories[] = [
    {
        id: 1,
        title: "Sombreros",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        route: "shop/sombreros",
    },
    {
        id: 2,
        title: "Chaquetas",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        route: "shop/chaquetas",
    },
    {
        id: 3,
        title: "Deportivos",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        route: "shop/deportivos",
    },
    {
        id: 4,
        title: "Mujeres",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        route: "shop/mujeres",
    },
    {
        id: 5,
        title: "Hombres",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        route: "shop/hombres",
    },
];

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItemContainer key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory;
