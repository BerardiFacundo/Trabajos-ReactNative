import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import loginUser from '../api/auth';
import styles from './styles';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const result = await loginUser(email, password);
        if (result.success) {
            Alert.alert('Login Successful', `Welcome ${result.user}!`);
        } else {
            Alert.alert('Login Failed', result.message);
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginForm;
