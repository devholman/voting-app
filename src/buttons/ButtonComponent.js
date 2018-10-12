import React from 'react';

 const CategoryButton = () => {
        let buttonNames = ["Funny", "Scary", "Creative"];
        return buttonNames.map((buttonName,i) => {return <button key={i}>{buttonName}</button>}); 
}

export default CategoryButton
