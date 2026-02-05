
import Link from 'next/link'; 
import React from 'react' 

async function DetailUser({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white max-w-md w-full p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Product {id} Details
        </h1>

        {/* User Details */}
        {id ? (
          <div className="space-y-3">
            <p className="text-gray-600">
              <span className="font-semibold">Product ID:</span> {id}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Product Name:</span> Product {id}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Description:</span> This is the description for Product {id}.
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Price:</span> ${Number(id) * 10}.00
            </p>
            {/* Add more fields if you have them */}
          </div>
        ) : (
          <p className="text-red-500 text-center">No product found with this ID.</p>
        )}

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link
            href="/product"
            className="inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Back to product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
