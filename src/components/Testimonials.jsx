import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';

// N'oubliez pas d'importer les styles CSS de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ name, comment, role }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg mx-4 my-8 transition-all duration-300 hover:shadow-xl">
        <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
            ))}
        </div>
        <p className="text-pink-800 mb-6 text-lg italic">" {comment} "</p>
        <div>
            <p className="font-semibold text-pink-600 text-xl">{name}</p>
            <p className="text-pink-400">{role}</p>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            name: "Marie L.",
            role: "Jeune mariée",
            comment: "GiftWish a rendu l'organisation de mon mariage tellement plus simple ! Nos invités ont adoré l'idée."
        },
        {
            name: "Thomas B.",
            role: "Utilisateur régulier",
            comment: "J'utilise GiftWish pour tous mes événements maintenant. C'est pratique et intuitif."
        },
        {
            name: "Sophie M.",
            role: "Nouvelle maman",
            comment: "La livraison des cadeaux était rapide et bien organisée. Je recommande vivement !"
        },
        {
            name: "Lucas R.",
            role: "Organisateur d'événements",
            comment: "GiftWish simplifie grandement la gestion des cadeaux pour mes clients. Un outil indispensable !"
        },
        {
            name: "Emma D.",
            role: "Étudiante",
            comment: "Parfait pour organiser des cadeaux de groupe ! Plus besoin de courir partout."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="py-16 bg-pink-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-pink-900 text-center mb-12">
                    Ce que disent nos utilisateurs
                </h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <Testimonial key={index} {...testimonial} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;