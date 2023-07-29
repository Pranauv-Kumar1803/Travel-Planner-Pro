"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("../controllers/userControllers/signup"));
const login_1 = __importDefault(require("../controllers/userControllers/login"));
const sendResetPasswordOtp_1 = __importDefault(require("../controllers/userControllers/sendResetPasswordOtp"));
const sendVerifyEmailOtp_1 = __importDefault(require("../controllers/userControllers/sendVerifyEmailOtp"));
const resetPassword_1 = __importDefault(require("../controllers/userControllers/resetPassword"));
const verifyJWT_1 = __importDefault(require("../middleware/verifyJWT"));
const logout_1 = __importDefault(require("../controllers/userControllers/logout"));
const updateImage_1 = __importDefault(require("../controllers/userControllers/updateImage"));
const editAccountDetails_1 = __importDefault(require("../controllers/userControllers/editAccountDetails"));
const deleteAccount_1 = __importDefault(require("../controllers/userControllers/deleteAccount"));
const router = express_1.default.Router();
router.post('/signup', signup_1.default);
router.post('/login', login_1.default);
router.post('/passwordotp', sendResetPasswordOtp_1.default);
router.post('/sendotp', sendVerifyEmailOtp_1.default);
router.post('/resetpassword', resetPassword_1.default);
router.use(verifyJWT_1.default);
router.get('/logout', logout_1.default);
router.post('/updateimage', updateImage_1.default);
router.put('/editaccount', editAccountDetails_1.default);
router.post('/deleteUser', deleteAccount_1.default);
exports.default = router;
