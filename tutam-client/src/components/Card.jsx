import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteReview } from "../actions/Review.actions";

const Card = ({ user, name, kamar, resources, review, rating, id }) => {
    const [formData] = useState({ id });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await deleteReview(formData);
            console.log(result);
            if (result.success) {
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const url = "/edit/" + id
    return (
        <div className="flex relative bg-white border border-gray-200 rounded-lg transition-transform shadow dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="absolute top-0 left-0 mt-2 ml-2">
                <button type="submit" className="bg-customRed hover:bg-customRed text-white py-2 px-3 rounded-full">
                    <img src="https://st2.depositphotos.com/4326917/11164/v/450/depositphotos_111649582-stock-illustration-trash-sign-illustration.jpg" alt="Trash Icon" className="h-6 w-6" />
                </button>
            </form>

            <Link to={url} className="absolute top-0 right-0 bg-white rounded-lg p-1 mt-2 mr-2">
                <img src="https://st.depositphotos.com/57803962/55982/v/450/depositphotos_559826916-stock-illustration-pencil-icon-vector-illustration.jpg" alt="Pencil Icon" className="h-6 w-6" />
            </Link>
    
            <div className="flex-shrink-1 m-1">
                <img src={resources} alt={name} className="rounded-t-lgr" />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p className="text-white mt-2 font-semibold whitespace-pre-line">{kamar}</p>
                <p className="text-white mt-2 italic whitespace-pre-line">{user}</p>
                <p className="text-white mt-2 whitespace-pre-line">{review}</p>
                <p className="text-white mt-2 whitespace-pre-line">{rating}</p>
            </div>
        </div>
    );
};

export default Card;