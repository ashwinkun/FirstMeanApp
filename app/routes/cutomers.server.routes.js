'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var customers = require('../../app/controllers/customers.server.controller');

	// customers Routes
	app.route('/customers')
		.get(customers.list)
		.post(users.requiresLogin, customers.create);

		// customers Routes
		app.route('/customers')
			.get(customers.list)
			.post(users.requiresLogin, customers.create);

	app.route('/customers/:customerId')
		.get(customers.read)
		.put(users.requiresLogin, customers.update)
		.delete(users.requiresLogin, customers.hasAuthorization, customers.delete);

	// Finish by binding the customer middleware
	app.param('customerId', customers.customerByID);
};
