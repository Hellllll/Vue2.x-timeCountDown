import fetch from './fetch'
import * as login from './login'

// 获取验证码，接口地址不详
// var mobileCode = phone => fetch('POST', '/v4/mobile/verify_code/send', {
//     mobile: phone,
//     scene: 'login',
//     type: 'sms'
// });

// 判断用户号码是否存在服务器中，接口地址不详
// var checkExsis = (checkNumber, type) => fetch('GET', '/v1/users/exists', {
//     [type]: checkNumber,
//     type
// });

/**
 * 创建临时数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}
var mobileCode = phone => setpromise(login.validate_token);
var checkExsis = (checkNumber, type) => setpromise(login.checkExsis);

export {mobileCode, checkExsis}