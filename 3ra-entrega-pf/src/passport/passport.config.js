import passport from "passport";
import { UserService } from "../repositories/index.js";
import inicializeLocalStrategies from "./passport.strategies.js/local.strategy.js";

const initializePassport = () => {

	inicializeLocalStrategies();

	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser( async(id, done) => {
		const user = await UserService.getUserById(id);
		done(null, user);
	});
}

export default initializePassport;