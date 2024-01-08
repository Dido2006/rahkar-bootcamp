const db = require("../Utils/Database");
class blogModel {
    async getBlog(id) {
        try {
            const query = "SELECT * FROM blogs WHERE id = ?";
            let [result] = await db.connection.execute(query, [id]);
            return result;
        } catch (error) {
            console.log(error);
            throw new error("خطا در انجام عملیات");
        }
    }
    async addBlog(blog) {
        console.log(blog);
        try {
            console.log("try");
            let { text } = blog;
            const query = "insert into Blogs (text) values(?) ";
            await db.connection.execute(query, [text]);
            return true;
        } catch (error) {
            console.log("catch error");
            console.log(error);
            throw new error("خطا در انجام عملیات");
        }
    }
    async listBlog() {
        try {
            const query = "SELECT * FROM blogs";
            let [data] = await db.connection.execute(query);
            return data;
        } catch (error) {
            console.log(error);
            throw new error("خطا در انجام عملیات");
        }
    }
    async updateBlog(text,id) {
        try {
            const query = "UPDATE `blogs` SET `text`=?,`created`= CURRENT_TIMESTAMP WHERE `id`= ?";
            await db.connection.execute(query,[text,id]);
            return true;
        } catch (error) {
            console.log(error);
            throw new error("خطا در انجام عملیات");
        }
    }
    async deleteBlog(blog) {
        try {
            const deleteBlogQurry = "DELETE FROM `blogs` WHERE `id`= ? ";
            await db.connection.execute(deleteBlogQurry, [blog]);
            return true;
        } catch (error) {
            throw new error("خطا در انجام عملیات");
        }
    }
}
module.exports = new blogModel();
