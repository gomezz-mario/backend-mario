class UserDTO{
	constructor(userData){
		this.first_name = userData.first_name;
		this.last_name = userData.last_name;
		this.full_name = `${this.first_name} ${this.last_name}`;
		this.username = userData.username ? userData.username : '';
		this.email = userData.email;
		this.password = userData.password;
		this.phone = userData.phone ? userData.phone.split('-').join() : '';
		this.role = userData.role ? userData.role : 'user';
		this.social = userData.social ? userData.social : 'local';
	};
}

export default UserDTO;