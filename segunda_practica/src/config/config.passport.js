import passport from 'passport';
import UsersModel from '../models/users.model.js';
import inicializeLocalStrategy from '../passport.strategies/local.strategy.js';
import appExpress from '../server.js';

export default () => {
	inicializeLocalStrategy();

	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser(async(id, done) => {
		const user = await UsersModel.findById(id);
		done(null, user);
	});

	appExpress.use(passport.initialize());
	appExpress.use(passport.session())
}