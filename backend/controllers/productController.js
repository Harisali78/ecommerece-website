const Product = require("../models/productModel");

exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  // const allProductKeys = req.body;
  // const newEvent = new Product(allProductKeys);
  try {
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Update Product -- Admin
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
};

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: `Product with Id ${req.params.id} has been deleted successfully`,
  });
};
