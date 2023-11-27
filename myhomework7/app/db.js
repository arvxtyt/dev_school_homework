const prisma = require('@prisma/client');
const client = new prisma.PrismaClient();
class Database {
    async getCustomerOrders(customerId) {
        const orders = await client.order.findMany({
            where: {
                customerId: Number(customerId),
            }
        });
        return orders;
    }

    async getCustomerOrderProductId(orderId) {
        const products = await client.customerOrders.findMany({
            where: {
                orderId: orderId
            }
        });

        return products.map((p) => p.productId);
    }

    async getProductsById(productId) {
        const product = await client.product.findUnique({
            where: {
                id: productId
            }
        });

        return product;
    }

    async updateEmployee(firstName, middleName, lastName, position, employeeId) {
        const employee = await client.employee.update({
            where: {
                id: Number(employeeId),
            },
            data: {
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                position: position,
            }
        });
        return employee;
    }

    async deleteOrder(orderId) {
        await client.customerOrders.deleteMany({
            where: {
                orderId: Number(orderId),
            }
        });

        const order = await client.order.delete({
            where: {
                id: Number(orderId)
            }
        });

        return order;
    }

    async createProduct(name, category, amount, price) {
        const product = await client.product.create({
            data: {
                name: name,
                category: category,
                amount: Number(amount),
                price: Number(price),
            }
        })

        return product;
    }
};


module.exports = {Database};

