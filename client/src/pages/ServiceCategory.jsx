import { useParams, useNavigate } from 'react-router-dom';
import { serviceData } from '../data/serviceData';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

const ServiceCategory = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [addedItems, setAddedItems] = useState({});

    const items = serviceData[category];

    if (!items) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Category Not Found</h2>
                <button
                    onClick={() => navigate('/services')}
                    className="flex items-center text-primary hover:underline"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Services
                </button>
            </div>
        );
    }

    const handleAddToCart = (item) => {
        addToCart(item);
        setAddedItems({ ...addedItems, [item.id]: true });

        // Reset the "Added" state after 2 seconds
        setTimeout(() => {
            setAddedItems(prev => ({ ...prev, [item.id]: false }));
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-16">
            {/* Header */}
            <div className="bg-white shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/services')}
                        className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6 mr-2" />
                        <span className="font-semibold">Back</span>
                    </button>
                    <h1 className="text-2xl font-bold text-gray-800">{category}</h1>
                    <div className="w-8"></div> {/* Spacer for centering */}
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                    <span className="text-sm font-semibold">4.8</span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                                </div>

                                <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-500 uppercase tracking-wide">Price</span>
                                        <p className="text-2xl font-bold text-primary">₹{item.price.toLocaleString()}</p>
                                    </div>

                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${addedItems[item.id]
                                                ? 'bg-green-600 text-white'
                                                : 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
                                            }`}
                                    >
                                        {addedItems[item.id] ? (
                                            <>
                                                <span className="mr-2">Added</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingCart className="w-5 h-5 mr-2" />
                                                Add to Cart
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;
