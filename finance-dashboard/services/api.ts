// services/api.ts
export const fetchUserData = async () => {
	const response = await fetch('http://localhost:3001/userData');
	if (!response.ok) {
	  throw new Error('Failed to fetch user data');
	}
	return response.json();
  };
  