const db = require('../utils/database');

const Category_36 = class Category_36 {
    constructor(id,name,size,remote_url,local_url)
    {
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    static fetchAll(){
        return db.execute('SELECT * from category_36');
    }
}

module.exports = Category_36;