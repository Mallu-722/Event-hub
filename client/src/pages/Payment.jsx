import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Smartphone, CheckCircle, AlertCircle, ArrowLeft, Lock } from 'lucide-react';

const Payment = () => {
    const { getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null); // 'success' | 'failure'

    const total = getCartTotal();
    const grandTotal = total * 1.18;

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setPaymentStatus('success');
            clearCart();
        }, 2000);
    };

    if (paymentStatus === 'success') {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 mb-6">
                        Thank you for your booking. Your transaction ID is <span className="font-mono font-bold">TXN{Math.floor(Math.random() * 1000000)}</span>.
                    </p>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-primary mb-6 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Cart
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Payment Methods */}
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Payment Method</h1>

                        <div className="space-y-4 mb-8">
                            <label
                                className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'upi'
                                        ? 'border-primary bg-primary/5'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="upi"
                                    checked={paymentMethod === 'upi'}
                                    onChange={() => setPaymentMethod('upi')}
                                    className="w-5 h-5 text-primary focus:ring-primary"
                                />
                                <div className="ml-4 flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                        <Smartphone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-gray-800">UPI / Wallet</span>
                                        <span className="text-sm text-gray-500">Google Pay, PhonePe, Paytm</span>
                                    </div>
                                </div>
                            </label>

                            <label
                                className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'card'
                                        ? 'border-primary bg-primary/5'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="payment"
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={() => setPaymentMethod('card')}
                                    className="w-5 h-5 text-primary focus:ring-primary"
                                />
                                <div className="ml-4 flex items-center">
                                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                                        <CreditCard className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-gray-800">Credit / Debit Card</span>
                                        <span className="text-sm text-gray-500">Visa, Mastercard, Rupay</span>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <form onSubmit={handlePayment}>
                            {paymentMethod === 'upi' ? (
                                <div className="mb-6 animate-fadeIn">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">UPI ID</label>
                                    <input
                                        type="text"
                                        placeholder="example@upi"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                    <p className="text-xs text-gray-500 mt-2">Enter your VPA ID to verify payment</p>
                                </div>
                            ) : (
                                <div className="space-y-4 mb-6 animate-fadeIn">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                                        <input
                                            type="text"
                                            placeholder="0000 0000 0000 0000"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">CVV</label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all flex items-center justify-center ${isProcessing
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-primary hover:bg-primary-dark hover:shadow-xl'
                                    }`}
                            >
                                {isProcessing ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    `Pay ₹${grandTotal.toLocaleString()}`
                                )}
                            </button>

                            <div className="mt-4 flex items-center justify-center text-gray-500 text-sm">
                                <Lock className="w-4 h-4 mr-1" />
                                Payments are 100% Secure and Encrypted
                            </div>
                        </form>
                    </div>

                    {/* Order Summary Summary */}
                    <div className="h-fit bg-gray-100 rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Total Amount</span>
                                <span>₹{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>GST (18%)</span>
                                <span>₹{(total * 0.18).toLocaleString()}</span>
                            </div>
                            <div className="border-t border-gray-300 pt-4 flex justify-between text-xl font-bold text-gray-800">
                                <span>Grand Total</span>
                                <span>₹{grandTotal.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-4 rounded-xl border border-gray-200">
                            <div className="flex items-start">
                                <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                                <p className="text-sm text-gray-600">
                                    By proceeding with the payment, you agree to our Terms of Service and Privacy Policy. Cancellation info is available on the dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
