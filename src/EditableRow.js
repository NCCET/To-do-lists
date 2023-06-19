import React from 'react';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancalClick }) => {
    return(
        <tr>
            <td>
                <input 
                type="text" 
                required="required" 
                placeholder="Enter a name..." 
                name="fullName"
                value={editFormData.fullName}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter a address..." 
                name="address"
                value={editFormData.address}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
            <input 
                type="text" 
                required="required" 
                placeholder="Enter a phone number..." 
                name="phoneNumber"
                value={editFormData.phoneNumber}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
            <input 
                type="email" 
                required="required" 
                placeholder="Enter a email..." 
                name="email"
                value={editFormData.email}
                onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancalClick}>Cancal</button>
            </td>
        </tr>
    );
};
export default EditableRow;