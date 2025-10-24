import { useState } from "react";

function FeedbackForm(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log ('Updating ${name}:', value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const remainingChars = 200 - formData.feedback.length;

    return (
        <div className="form-container">
        <h1 className="page-title">Feedback Form</h1>
        <form className="feedback-form">
            <label>
            Name:
            <input id="field"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            </label>
            <br />
            <label>
            Email:
            <input id="field"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            </label>
            <br />
            <label>
            Feedback:
            <textarea id="field"
                type="feedback"
                name="feedback"
                maxLength={200}
                placeholder = "Enter Feedback, I need it please!"
                value={formData.feedback}
                onChange={handleChange}
            />
            </label>
            <p>{remainingChars} characters remaining</p>
            <button type="submit" disabled={!formData.name || !formData.email || !formData.feedback}>Submit</button>
        </form>
        <h2 className="preview">Preview</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
        </div>
    );
    }

    export default FeedbackForm;