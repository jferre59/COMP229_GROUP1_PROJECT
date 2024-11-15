import React, { useState, useEffect } from 'react';
import './AddFlower.css';
import Navbar from '../../components/navbar/Navbar_vendor';
import Footer from '../../components/footer/footer';

const AddFlower = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        birthday: false,
        anniversary: false,
        valentines: false,
        none: false,
        quantity: '',
        availability: '',
        notes: '',
        image:null,
    });

    const [formErrors, setFormErrors] = useState({});

    //validates form returning error message if any field(s) not valid
    const validateForm = (event) => {
        let newErrors = {};

        const requiredFields = [
            'name', 'description', 'price', 'category', 'quantity', 'availability'
        ];

        requiredFields.forEach((field) => {
            if (!formValues[field]) {
                // Capitalize the first letter of the field name for the error message
                const formattedFieldName = field.charAt(0).toUpperCase() + field.slice(1);
                newErrors[field] = `${formattedFieldName} is required`;
            }
        });

        if (formValues.price && (isNaN(formValues.price) || Number(formValues.price) <= 0)) {
            newErrors.price = 'Price must be a positive number';
        }

        if (formValues.quantity && (isNaN(formValues.quantity) || Number(formValues.quantity) <= 0)) {
            newErrors.quantity = 'Quantity must be greater than 0';
        }

        if (!formValues.birthday && !formValues.anniversary && !formValues.valentines && !formValues.none) {
            newErrors.occasions = 'Select at least one occasion';
        }

        setFormErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event) => {
        const { name, type, value, checked, files } = event.target;

        setFormValues(prevValues => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            // Form is valid, proceed with form submission
            console.log("Form submitted successfully", formValues);
        }
    };

    return (
        <>
        <Navbar/>
        <section id='add'>
            <div id='container'>
                <h1>Add Flower</h1>

                <form id='addFlower' onSubmit={handleSubmit} noValidate>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' value={formValues.name} onChange={handleChange} />
                    {formErrors.name && <span className="error">{formErrors.name}</span>}

                    <label htmlFor='description'>Description</label>
                    <input type='text' id='description' name='description' value={formValues.description} onChange={handleChange} />
                    {formErrors.description && <span className="error">{formErrors.description}</span>}

                    <label htmlFor='price'>Price</label>
                    <input type='text' id='price' name='price' value={formValues.price} onChange={handleChange} />
                    {formErrors.price && <span className="error">{formErrors.price}</span>}

                    <label htmlFor='category'>Category</label>
                    <select id='category' name='category' value={formValues.category} onChange={handleChange}>
                        <option value=''>Select Category</option>
                        <option value='rose'>Rose</option>
                        <option value='tulip'>Tulip</option>
                        <option value='lily'>Lily</option>
                    </select>
                    {formErrors.category && <span className="error">{formErrors.category}</span>}

                    <label id='occasions'>Occasions</label>
                    <fieldset id='check'>
                        <label>
                            Birthday
                            <input type='checkbox' id='birthday' name='birthday' checked={formValues.birthday} onChange={handleChange} />
                        </label>
                        <label>
                            Anniversary
                            <input type='checkbox' id='anniversary' name='anniversary' checked={formValues.anniversary} onChange={handleChange} />
                        </label>
                        <label>
                            Valentines
                            <input type='checkbox' id='valentines' name='valentines' checked={formValues.valentines} onChange={handleChange} />
                        </label>
                    </fieldset>
                    {formErrors.occasions && <span className="error">{formErrors.occasions}</span>}

                    <label htmlFor='quantity'>Quantity</label>
                    <input type='number' id='quantity' name='quantity' min='1' value={formValues.quantity} onChange={handleChange} />
                    {formErrors.quantity && <span className="error">{formErrors.quantity}</span>}

                    <label>Availability</label>
                    <fieldset id='check'>
                        <label>
                            Not available
                            <input type='radio' name='availability' value='not_available' checked={formValues.availability === 'not_available'} onChange={handleChange} />
                        </label>
                        <label>
                            Available
                            <input type='radio' name='availability' value='available' checked={formValues.availability === 'available'} onChange={handleChange} />
                        </label>
                    </fieldset>
                    {formErrors.availability && <span className="error">{formErrors.availability}</span>}

                    <label htmlFor='notes'>Notes</label>
                    <textarea id='notes' name='notes' value={formValues.notes} onChange={handleChange}></textarea>

                    <label htmlFor='image'>Image(s)</label>
                    <input type='file' id='image' name='image' accept='image/*' onChange={handleChange} />

                    <button type='submit'>Add Flower</button>
                </form>
            </div>
        </section>
        <Footer/>
        </>
        
    );
};

export default AddFlower;