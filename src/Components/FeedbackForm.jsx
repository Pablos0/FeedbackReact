import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

     /* const [formData, setFormData] = useState ({
        name: '',
        email: '',
        feedback: ''
    }); // with this useState is being initialized. 
    
    */ 
        const [formData, setFormData] = useState ({
            name: '',
            email: '',
            feedback: '',
            rating: ''
        }); // with this useState is being initialized.

    const handleChange = (event) => { // interact with an event triggered by an user.
        const { name, value } = event.target; // target refers to the DOM element triggered by the event, in this case the input.
        setFormData({ // this function merge the previous information with the new one.
            ...formData, 
            [name]: value
        });
    };

    const handleSubmit = (event) => { // this function prevents default form submission
        event.preventDefault(); // formData use the info placed in the form
        const confirmationMessage = `
            Name: ${formData.name} 
            Email: ${formData.email}
            Feedback: ${formData.feedback}
            Rating: ${formData.rating}
            `;
        const isConfirmed = window.confirm(`Please confirm your details: \n\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log('Submitting feedback:', formData);
            setFormData ({ // this function clear the form fields 
                name: '',
                email: '',
                feedback: '',
                rate: ''
            });
            alert('Thank you for your valuable feedback!!');
        }
    };


  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type="text" name='name' placeholder='Your Name' value={formData.name} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Your Email' value={formData.email} onChange={handleChange}/>
        <textarea name="feedback" placeholder='Your Feedback' value={formData.feedback} onChange={handleChange}></textarea>
        <div style={{display:'flex', gap:'10px', flexDirection:'column'}}>
            <span>Rate Us:
                <p><input type="radio" name="rating" value='1' onChange={handleChange} />1</p>
                <p><input type="radio" name="rating" value='2' onChange={handleChange} />2</p>
                <p><input type="radio" name="rating" value='3' onChange={handleChange} />3</p>
                <p><input type="radio" name="rating" value='4' onChange={handleChange} />4</p>
                <p><input type="radio" name="rating" value='5' onChange={handleChange} />5</p>
            </span>
        </div>
        <button type='submit'>Submit Feedback</button>
        
      </form>
    </>
  );
};

export default FeedbackForm;
