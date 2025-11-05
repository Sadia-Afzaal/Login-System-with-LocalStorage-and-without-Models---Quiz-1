const jwt = require("jsonwebtoken");
const myExpress = require("express");
const myRouter = myExpress.Router();
const myUser = require("./myschema/UserSchema.js");
const sanitizeInput = require("./utils/sanitizeInput.js");
const regEmailTest = require("./utils/regEmailTest.js");
const { charLength } = require("./utils/charLength.js");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

// Secret key for signing tokens (same as register)
const JWT_SECRET = "mySuperSecretKey_12345";

// Sub-route is /login-user/
myRouter.post('/', [
    body("loginEmail").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required")
],
async (req, res) => {
    const resData = {};

    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        resData.resStatus = "false";
        resData.message = "Validation failed";
        resData.errors = errors.array();
        return res.json(resData);
    }

    try {
        // Validating email
        let email_get = sanitizeInput(req.body.loginEmail);
        if (regEmailTest(email_get) === 0) {
            resData.resStatus = "false";
            resData.message = "Email is not valid";
            return res.json(resData);
        }

        // Validating password
        let password_get = sanitizeInput(req.body.password);
        if (charLength(password_get, 6, 35) === 0) {
            resData.resStatus = "false";
            resData.message = "Password should be 6 to 35 characters";
            return res.json(resData);
        }

        // Find user in database
        const user = await myUser.findOne({ regEmail: email_get });
        
        if (!user) {
            resData.resStatus = "false";
            resData.message = "User not found";
            return res.json(resData);
        }

        // Compare password (assuming you're storing plain text passwords)
        // If using bcrypt, use: const isPasswordValid = await bcrypt.compare(password_get, user.password);
        const isPasswordValid = (password_get === user.password);

        if (!isPasswordValid) {
            resData.resStatus = "false";
            resData.message = "Invalid password";
            return res.json(resData);
        }

        // Define payload data for JWT
        const payload_data = {
            email: user.regEmail,
            name: user.regName,
            userType: "user",
            userId: user._id
        }

        // Generate token
        const token = jwt.sign(
            payload_data,
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        resData.resStatus = "true";
        resData.message = "Login Successful";
        resData.token = token;
        resData.user = {
            email: user.regEmail,
            name: user.regName,
            userId: user._id
        };

        return res.json(resData);

    } catch (error) {
        console.error("Error during login:", error);
        resData.resStatus = "false";
        resData.message = "Server error during login";
        return res.json(resData);
    }
});

module.exports = myRouter;