const db = require('../utils/database');

const Clothing_xx = class Clothing_xx {
    constructor(id, name, cat_id, price, remote_url, local_url) {
       this.id = id;
       this.name = name;
       this.cat_id = cat_id;
       this.price = price;
       this.remote_url = remote_url;
       this.local_url = local_url;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * from clothing_xx');
    }

    static fetchProductByCategory(cid) {
        return db.execute('SELECT * from clothing_xx where cat_id = ?', [cid]);
    }

}

module.exports = Clothing_xx;