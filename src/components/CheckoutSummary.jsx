import React from 'react';

const CheckoutSummary = ({ subtotal, taxRate, onClear, onCheckout }) => {
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="mt-4 p-4 bg-white rounded-md shadow-lg text-black"> {/* Set background to white and text to black */}
      <h2 className="text-lg font-bold mb-2">Summary</h2>
      <div className="flex justify-between border-b pb-2 mb-2">
        <span className="font-semibold">Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-b pb-2 mb-2">
        <span className="font-semibold">Tax({taxRate * 100}%):</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg border-b pb-2 mb-2">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={onClear}
          className="bg-red-500 text-white rounded px-4 py-2 w-1/2 hover:bg-red-600 transition duration-200"
        >
          Clear All
        </button>
        <button
          onClick={onCheckout}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded px-4 py-2 w-1/2 hover:from-purple-600 hover:to-indigo-500 transition duration-200"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
