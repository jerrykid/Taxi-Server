var user = require('../user/user.js');
var should = require('should');
var done = {};

describe('User', function () {
	describe('Should initial user', function () {

		it('Should initial user', function () {
			should.exist(user);
		})

		it('Should get user successfull', function () {
			console.log(user);
			user.getUser(done);
		});
				
	})
});

