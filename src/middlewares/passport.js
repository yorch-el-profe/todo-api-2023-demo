const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { findById } = require("../services/user");

passport.use(
	new Strategy(
		{
			secretOrKey: process.env.JWT_SECRET,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		async function (payload, done) {
			const { id } = payload;

			const user = await findById(id);

			if (!user) {
				return done({ message: "El usuario no existe en base de datos" });
			}

			done(null, user);
		}
	)
);

module.exports = passport.authenticate("jwt", { session: false });
