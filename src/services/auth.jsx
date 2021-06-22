export const login = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    return await response.json();
  } catch (error) {
    console.error('[login] error');
    console.trace(error);
  }
};

export const register = async (credentials) => {
  try {
    alert('registration is not ready yet');
  } catch (error) {}
};

export const logOut = async () => {
  localStorage.removeItem('auth.token');
  alert('you are logged out');
  //   return <Redirect to="/users"></Redirect>;
};
