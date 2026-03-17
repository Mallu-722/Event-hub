import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const total = getCartTotal();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
                    <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShoppingBag className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
                    <p className="text-gray-500 mb-8">Looks like you haven't added any services yet.</p>
                    <button
                        onClick={() => navigate('/services')}
                        className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
                    >
                        Browse Services
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="mr-4 p-2 hover:bg-white rounded-full transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
                    <span className="ml-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {cartItems.length} Items
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items List */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="p-6 space-y-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-lg shadow-sm"
                                        />

                                        <div className="flex-grow text-center sm:text-left">
                                            <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
                                            <p className="text-gray-500 text-sm">{item.description}</p>
                                            <p className="text-primary font-bold mt-2">₹{item.price.toLocaleString()}</p>
                                        </div>

                                        <div className="flex items-center gap-4 bg-gray-50 px-3 py-2 rounded-lg">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="p-1 hover:text-red-500 transition-colors"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="p-1 hover:text-green-500 transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors p-2"
                                            title="Remove Item"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center">
                                <button
                                    onClick={clearCart}
                                    className="text-red-500 text-sm font-semibold hover:underline"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{total.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Taxes (18% GST)</span>
                                    <span>₹{(total * 0.18).toLocaleString()}</span>
                                </div>
                                <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-gray-800">
                                    <span>Total</span>
                                    <span>₹{(total * 1.18).toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate('/payment')}
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                            >
                                Proceed to Checkout
                                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-4">
                                Secure checkout powered by Stripe & Razorpay simulation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
