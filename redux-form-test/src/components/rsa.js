import React from 'react';
import RSAKey from 'react-native-rsa';

const bits = 1024;
const exponent = '10001'; // must be a string
var rsa = new RSAKey();
var r = rsa.generate(bits, exponent);
var publicKey = rsa.RSAGetPublicString(); // return json encoded string
var privateKey = rsa.RSAGetPrivateString(); // return json encoded string

const RSAcomponent = () => {
    return (
        <div>
            <span>publicKey</span>
            <span>{publicKey}</span>
        </div>
    );
}
