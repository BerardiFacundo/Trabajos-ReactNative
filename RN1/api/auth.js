import axios from 'axios';

const loginUser = async (email, password) => {
    try {
        const response = await axios.post('http://localhost/login.php', {
            email: email,
            password: password,
        });
        const { status, user, message } = response.data;

        if (status === 'success') {
            return { success: true, user };
        } else {
            return { success: false, message };
        }
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: 'Network error, try again later.' };
    }
};

export default loginUser;
