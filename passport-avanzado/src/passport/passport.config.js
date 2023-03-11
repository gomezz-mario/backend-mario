import passport from 'passport';
import jwt from 'passport-jwt';

const JWTStrategy = jwt.Strategy;

const cookieExtractor = (req) => {
	let token = (req && req.cookies) ? req.cookies['cookieToken'] : null;
	token = token.split(' ')[1];
	return token;
}

const initializePassport = () => {
	
	passport.use('jwt', new JWTStrategy({
		jwtFromRequest: '',
		secretOrKey: '',
	}));

	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser( async(id, done) => {
		const user = await UserModel.findById(id);
		done(null, user);
	});
}

export default initializePassport;