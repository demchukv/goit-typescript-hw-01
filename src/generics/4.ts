type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser<T extends User>(initialValues: Partial<T>): T {
  return {
    ...initialValues,
    name: initialValues.name || '',
    surname: initialValues.surname || '',
    email: initialValues.email || '',
    password: initialValues.password || '',
  } as T;
}

const updatedUserData = createOrUpdateUser<User>({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

console.log('Updated user data:', updatedUserData);