<script>
// basic encryption
function customEncrypt(input, key) {
   
    let encrypted = '';
    for (let i = 0; i < input.length; i++) {
        encrypted += String.fromCharCode(input.charCodeAt(i) + key.charCodeAt(i % key.length));
    }
    return encrypted;
}
 
// basic decryption
function customDecrypt(input, key) {
    
    let decrypted = '';
    for (let i = 0; i < input.length; i++) {
        decrypted += String.fromCharCode(input.charCodeAt(i) - key.charCodeAt(i % key.length));
    }
    return decrypted;
}
 
// generate encryption key based 
function generateDynamicKey(username) {    
    let secretKey = "WPGlobal";
    return username + secretKey;
}
 
// Example usage
let username = "Carlton";
let queryString = "param1=value1&param2=value2&param3=value3";
 
// Generate dynamic encryption key
let dynamicKey = generateDynamicKey(username);
 
// Encrypt the query string using the dynamic key
let encryptedQueryString = customEncrypt(queryString, dynamicKey);
console.log("Encrypted Query String:", encryptedQueryString);
 
// Decrypt the encrypted query string using the dynamic key
let decryptedQueryString = customDecrypt(encryptedQueryString, dynamicKey);
console.log("Decrypted Query String:", decryptedQueryString);
</script>
 


