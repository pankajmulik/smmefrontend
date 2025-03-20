import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        category: "",
        name: "",
        brand: "",
        imageUrl: "",
        price: "",
        description: "",
        battery: "",
        display: "",
        storage: "",
        network: "",
        imageUrls: [""]
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUrlsChange = (index, e) => {



        const newImageUrls = 'public/images/assets' + [...formData.imageUrls];
        newImageUrls[index] = e.target.value;
        setFormData({ ...formData, imageUrls: newImageUrls });
    };

    const handleAddImageUrl = () => {

        setFormData({ ...formData, imageUrls: [...formData.imageUrls, ""] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/products", formData);
            console.log("Product added:", response.data);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg">
                    <option value="">Select a category</option>
                    <option value="mobiles">Mobiles</option>
                    <option value="smartwatches">Smartwatches</option>
                    <option value="headphones">Headphones</option>
                    <option value="accesories">Accessories</option>
                </select>
            </div>

            {formData.category && (
                <>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Brand</label>
                        <input name="brand" value={formData.brand} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Image URL</label>
                        <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Price</label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    {formData.category === "mobiles" && (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Battery</label>
                                <input name="battery" value={formData.battery} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Display</label>
                                <input name="display" value={formData.display} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Storage</label>
                                <input name="storage" value={formData.storage} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Network</label>
                                <input name="network" value={formData.network} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Image URLs</label>
                                {formData.imageUrls.map((url, index) => (
                                    <input key={index} name={`imageUrls[${index}]`} value={url} onChange={(e) => handleImageUrlsChange(index, e)} className="w-full px-3 py-2 border rounded-lg mb-2" />
                                ))}
                                <button type="button" onClick={handleAddImageUrl} className="bg-blue-500 text-white px-3 py-2 rounded-lg">Add Image URL</button>
                            </div>
                        </>
                    )}
                </>
            )}

            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Submit</button>
        </form>
    );
};


export default AddProduct;
