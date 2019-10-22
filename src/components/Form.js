import React, { useState } from 'react'
import PropTypes from 'prop-types'
import СlockModel from '../Models/ClockModel'

function Form({ onAdd }) {

    const [form, setForm] = useState({
        city: "",
        timezone: "",
    })

    const handleSubmit = event => {
        event.preventDefault();

        const city = event.target.city.value;
        const timezone = Number(event.target.timezone.value);

        onAdd(new СlockModel(city, timezone))

        setForm({
            city: "", 
            timezone: "",
        })
    }

    const handleChange = event => {
        setForm({
            [event.target.name]: event.target.value
        })
    }

    return (
        <form action="#" onSubmit={handleSubmit} className="Form">
            <label htmlFor="" className="Form-lable"> Название
                <input type="text" className="Form-input" value={form.city} name="city" onChange={handleChange} />
            </label>
            <label htmlFor="" className="Form-lable"> Временная зона
                <input type="text" className="Form-input" value={form.timezone} name="timezone" onChange={handleChange} />
            </label>
            <button className="Form-btn">Добавить</button>
        </form>
    )
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default Form

