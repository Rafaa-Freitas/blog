interface User {
  id: string;
  user: string;
  name: string;
  surname: string;
  token: string;
  description: string | null;
  imageProfile: string;
}

export default User;
