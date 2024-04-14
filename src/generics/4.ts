type UserTwo = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserTwo>): UserTwo {
  const defUserTwo: UserTwo = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };
  return { ...defUserTwo, ...initialValues };
}

createOrUpdateUser({
  email: 'user@mail.com',
  password: 'password123',
});
