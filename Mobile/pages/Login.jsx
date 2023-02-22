import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Btn from '../components/Btn';
import { darkGreen, white } from '../components/Constants';
import Field from '../components/Field';

const Login = (props) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460, marginTop: 300 }}>
        {/* <Text
        style={{
          color: 'white',
          fontSize: 64,
          fontWeight: 'bold',
          marginVertical: 20,
        }}>
        Login
      </Text> */}
        <View
          style={{
            backgroundColor: white,
            height: 700,
            width: 460,
            borderTopLeftRadius: 150,
            paddingTop: 60,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 50,
            }}>
            Login to your account
          </Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <Field
                  placeholder="Email"
                  keyboardType={'email-address'}
                  label="Email Address"
                  icons="mail"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <Field label="Password"
                  icons="lock"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  placeholder="Password"
                  secureTextEntry={true} />
              </>
            )}
          </Formik>
          <View
            style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 50 }}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background >
  );
};

export default Login;
