import React from 'react';
import { Component } from 'react';

class AddItemForm extends Component {
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.onAddItem(e.target.itemToAdd.value)
    }
    render() {
        return (
            <form>
                <input 
                    name="itemToAdd"
                    type="text"
                    placeholder="carrots"
                    aria-label="Shopping list item"
                />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}

export default AddItemForm;