const db = require('./db')
const database = new db.Database();

class Controller {
    async readOrdersOfCustomer(customerId, res) {
        let totalPrice = 0;

        const customerOrders = await database.getCustomerOrders(customerId);

        if (!customerOrders) {
            res.status(404);
            res.json({
                error: true,
                msg: "Customer with given id not found"
            })
            return;
        }

        for (const customerOrder of customerOrders) {
            const products = await database.getCustomerOrderProductId(customerOrder.id);
            for (const product of products) {
                const p = await database.getProductsById(product.productId);
                totalPrice += p.amount * p.price;
            }
            totalPrice += customerOrder.deliveryCost;
        }
        res.status(200);
        res.json({
            orders: customerOrders,
            totalCost: totalPrice
        });
    }

    async updateEmployee(employeeId, firstName, lastName, middleName, position, res) {
        try {
            const employee = await database.updateEmployee(firstName, lastName, middleName, position, employeeId);
            res.status(200);
            res.json({
                employee
            })
        } catch {
            res.status(404);
            res.json({
                "error_message": `Employee with id ${employeeId} not found`
            })
        }
    }

    async deleteOrder(orderId, res) {
        try {
            const order = await database.deleteOrder(orderId);
            res.status(200);
            res.json({
                order
            })
        } catch {
            res.status(404);
            res.json({
                "error_message": `Order with id ${orderId} not found`
            })
        }
    }

    async createProduct(name, category, amount, price, res) {
        try {
            if (!["Fruits", "Meat", "Fish", "Snacks"].includes(category)) {
                res.status(400);
                res.json({
                    "error_message": `Can't create product with invalid category "${category}"`
                })
                return;
            }

            const product = await database.createProduct(name, category, amount, price);
            res.status(200);
            res.json({
                product
            })
        } catch {
            res.status(500);
            res.json({
                "error_message": "Can't create product"
            })
        }
    }
}

module.exports = { Controller }