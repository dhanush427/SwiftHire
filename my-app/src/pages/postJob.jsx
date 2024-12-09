import React from 'react';

const JobPost = () => {
    // form
    const [formData, setFormData] = useState({
        companyName: '',
        roleTitle: '',
        roleDescription: '',
    });

    const [message, setMessage] = useState('');

    // show change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // handle form submit, broken cause of mongo
    const handleSubmit = async (e) => {
        e.preventDefault();

        // validate form inputs
        if (!formData.companyName || !formData.roleTitle || !formData.roleDescription) {
            setMessage('All fields are required.');
            return;
        }

        try {
            // send form data to the backend
            const response = await fetch('/api/job-posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Job posting successfully created!');
                setFormData({ companyName: '', roleTitle: '', roleDescription: '' });
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
            // only getting submission errors idk
        } catch (error) {
            setMessage('An error occurred. Please try again.');
            console.error('Submission Error:', error);
        }
    };

    return (
<main className="main">
            <h1>Post a Job</h1>
            <form className="post__form" onSubmit={handleSubmit}>
                <div className="post__form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="post__form-input"
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="post__form-group">
                    <label htmlFor="roleTitle">Role Title</label>
                    <input
                        type="text"
                        id="roleTitle"
                        name="roleTitle"
                        className="post__form-input"
                        placeholder="Enter role title"
                        value={formData.roleTitle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="post__form-group">
                    <label htmlFor="roleDescription">Role Description</label>
                    <textarea
                        id="roleDescription"
                        name="roleDescription"
                        className="post__form-input"
                        placeholder="Enter role description"
                        value={formData.roleDescription}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="post__form-button">
                    Submit Job Post
                </button>
                {message && <p className="post__form-message">{message}</p>}
            </form>
        </main>
    )
}

export default JobPost;