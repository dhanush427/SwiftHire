import React from 'react';

const JobPost = () => {
    return (
        <main className="main">
            <h1>Post Job</h1>
            <form className="post__form">
                <div className="post__form-name">
                    <input type="text" className="post__form-name-input" placeholder="Company Name" />
                </div>
                <div className="post__form-title">
                    <input type="text" className="post__form-title-input" placeholder="Role Title" />
                </div>
                <div className="post__form-desc">
                    <input type="text" className="post__form-desc-input" placeholder="Role Description" />
                </div>
            </form>
        </main>
    )
}

export default JobPost;