import React from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

export default function ShoppingList(props) {
    return (
        <ul>
            {props.items.map((item, i) => 
                <ShoppingItem 
                    key={i}
                    item={item}
                    onDeleteItem={props.DeleteItem}
                    onCheckItem={props.onCheckItem}
                />
            )}
        </ul>
    )
}

ShoppingList.defaltProps = {
    items: []
}


