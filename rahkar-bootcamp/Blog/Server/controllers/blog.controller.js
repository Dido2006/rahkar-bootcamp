const { catchError } = require("rxjs");
const TaskModel = require("../Models/blog.model");
const blogModel = require("../Models/blog.model");
const { json } = require("express");

exports.listBlog = async (req, res) => {
    try {
        let result = await blogModel.listBlog();
        res.status(200).json(result);
        } catch (Error) {
        res.status(400).json({ massage: "error" });
    }
};
exports.getBlog = async (req, res) => {
    try {
        let {id} = req.body
        console.log('========================');
        let result = await blogModel.getBlog(id);
        res.status(200).json(result);
        } catch (Error) {
        res.status(400).json({ massage: "error get" });
    }
};
exports.addBlog = async (req, res) => {
    try {
        let result = await blogModel.addBlog(req.body);
        res.status(200).json({ massage: "successful" })
    } catch (Error) {
        res.status(400),json({massage:"error"})
    }
};
exports.deleteBlog = async (req, res) => {
    try {
        let  {id} = req.body
        let result = await blogModel.deleteBlog(id);
        res.status(200).json({ massage: "successful" })
    } catch (Error) {
        res.status(400).json({ massage: "error" })
    }
};
exports.updateBlog = async (req, res) => {
    try {let{id ,text}= req.body
        let result = await blogModel.updateBlog(text,id);
        res.status(200).json({ massage: "successful" })
        } catch (Error) {
        res.status(400).json({ massage: "error" })
    }
};
