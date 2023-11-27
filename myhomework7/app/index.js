const express = require('express');
const app = express();
const control = require('./controller');
const controller = new control.Controller();

const PORT = 3000;

app.use(express.json())

app.get('/customer/:customerId/orders', async (req, res) => {
    const customerId = Number(req.params['customerId']);
    await controller.readOrdersOfCustomer(customerId, res);
})

app.patch('/employees/:employeeId', async (req, res) => {
    const employeeId = Number(req.params['employeeId']);
    const { firstName, lastName, middleName, position } = req.body;
    await controller.updateEmployee(employeeId, firstName, lastName, middleName, position, res);
})

app.delete('/orders/:orderId', async (req, res) => {
    const orderId = req.params['orderId'];
    await controller.deleteOrder(orderId, res);
})

app.post('/products', async (req, res) => {
    const { name, category, amount, price } = req.body;
    await controller.createProduct(name, category, amount, price, res);
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

