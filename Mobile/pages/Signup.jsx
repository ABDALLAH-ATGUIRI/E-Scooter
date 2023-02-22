import React, { useState } from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Btn from '../components/Btn';
import { darkGreen, white } from '../components/Constants';
import Field from '../components/Field';
import { Formik } from 'formik';


const Signup = props => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460, marginTop: 200 }}>
        {/* <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text> */}
        {/* <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text> */}
        <View
          style={{
            backgroundColor: white,
            height: 750,
            width: 460,
            borderTopLeftRadius: 150,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold' }}>
            Welcome
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create a new account
          </Text>
          <Formik
            initialValues={{ firstName: "", phone: "", lastName: "", dateOfBirth: "", email: "", password: "", confirmPassword: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <Field
                  label="First Name"
                  icons="person"
                  placeholder="First Name"
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName} />
                <Field
                  label="Last Name"
                  icons="person"
                  placeholder="Last Name"
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.LastName}
                />
                <Field
                  label="Email Address"
                  icons="mail"
                  placeholder="Email Address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <Field
                  placeholder="Contact Number"
                  keyboardType={'number'}
                  label="Contact Number"
                  icons="phone"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
                <Field
                  label="Password"
                  icons="lock"
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword} />
                <Field
                  label="Confirm Password"
                  icons="lock"
                  placeholder="Confirm Password"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
              </>

            )}
          </Formik>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              marginVertical: 20
            }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: "center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              and {" "}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
