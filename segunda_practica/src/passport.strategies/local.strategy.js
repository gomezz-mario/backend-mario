import passport from 'passport';
import passportLocal from 'passport-local';
import UsersModel from '../models/users.model.js';
import { createHash, isValidPassword } from '../utils.js';

const LocalStrategy = passportLocal.Strategy;

const inicializeLocalStrategy = () => {
	passport.use('login', new LocalStrategy(
		{ usernameField: 'email'},
		async (username, password, done) => {
			try {
				const user = await UsersModel.findOne({email: username}).lean().exec();
				if(!user) return done(null, false);
				if(!isValidPassword(user, password)) return done(null, false);
				return done(null, user);
			} catch (error) {
				return({error: 'Error en login local strategy'});
			}
		}
	));

	passport.use('register', new LocalStrategy(
		{passReqToCallback: true, usernameField: 'email'},
		async (request, username, password, done) => {
			try {
				const user = await UsersModel.findOne({email: username, social: 'local'}).lean().exec();
				if(user) return done(null, false);
				const createdUser = await UsersModel.create({
					first_name: request.body.first_name || '',
					last_name: request.body.last_name || '',
					username: request.body.username || '',
					email: username,
					password: createHash(password),
					social: 'local',
				});
				return done(null, createdUser);
			} catch (error) {
				return({error: 'Error en register local strategy'});
			}
		}
	));
}

export default inicializeLocalStrategy;