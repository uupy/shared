const regPhone = /^[1][3,4,5,7,8,9][0-9]{9}$/
/**检验手机号码*/
export const isPhoneNumber = (val: string) => regPhone.test(val)

const regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
/**检验邮箱*/
export const isEmail = (val: string) => regEmail.test(val)