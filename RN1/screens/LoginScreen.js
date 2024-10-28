import React from 'react';
import { View } from 'react-native';
import LoginForm from '../components/LoginForm';
import styles from '../components/styles.js';

const LoginScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <LoginForm />
        </View>
    );
};

export default LoginScreen;
