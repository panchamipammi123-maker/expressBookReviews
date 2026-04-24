const axios = require('axios');

const baseUrl = 'http://localhost:5000';

async function getAllBooks() {
    const res = await axios.get(`${baseUrl}/`);
    return res.data;
}

async function getBooksByAuthor(author) {
    const res = await axios.get(`${baseUrl}/author/${author}`);
    return res.data;
}

async function getBooksByTitle(title) {
    const res = await axios.get(`${baseUrl}/title/${title}`);
    return res.data;
}

async function getBookByIsbn(isbn) {
    const res = await axios.get(`${baseUrl}/isbn/${isbn}`);
    return res.data;
}

async function getBookReviews(isbn) {
    const res = await axios.get(`${baseUrl}/review/${isbn}`);
    return res.data;
}

async function addReview(isbn, review, token) {
    const res = await axios.post(
        `${baseUrl}/review/${isbn}`,
        { review },
        { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
}

async function deleteReview(isbn, token) {
    const res = await axios.delete(
        `${baseUrl}/review/${isbn}`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
}

module.exports = {
    getAllBooks,
    getBooksByAuthor,
    getBooksByTitle,
    getBookByIsbn,
    getBookReviews,
    addReview,
    deleteReview
};
