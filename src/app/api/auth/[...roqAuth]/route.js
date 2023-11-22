import { RoqAuth } from '@roq/nextjs';

/*
	You can export RoqAuth without passing any options if you don't need to customize the behaviour
	export default RoqAuth; //handles all the authentication routes automatically
*/

const handler = RoqAuth({
	hooks: {
		// This hook is optional - and can be used to persist user information,
		// or as in the case below, send them a welcome notification

		onRegisterSuccess: async ({ user }) => {
		},

		onLoginSuccess: async ({ user }) => { },
	},
});

export { handler as GET, handler as POST }