
//Register validation
export const registerValidation = (data) => {
  const { name,  phone_no, password} = data;
  let errors = [];

  //checking required fields
  if (!name || !phone_no || !password) {
    errors.push({ msg: "please fill in all fields" });
    return errors
  }

  // const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
  if (!passwordRegex.test(password)) {
    errors.push({
      msg: "password should have one small case, a capital letter, a symbol and a number and also the length should be greater than 8 and less than 20",
    });
    return errors

  }

  const phoneRegex = /^(\+?91|0)?[6789]\d{9}$/;
  if (!phoneRegex.test(phone_no)) {
    errors.push({ msg: "Enter a valid phone number" });
    return errors
  }
  return [{msg: null}]
};

//Login validation
export const loginValidation = (data) => {
  const { phone_no} = data;
  const errors =[]
  const phoneRegex = /^(\+?91|0)?[6789]\d{9}$/;
  if (!phoneRegex.test(phone_no)) {
    errors.push({ msg: "Enter a valid phone number" });
    return errors
  }
  return [{msg: null}]
};


