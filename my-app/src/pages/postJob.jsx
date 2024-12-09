import React from 'react';

const JobPost = () => {
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