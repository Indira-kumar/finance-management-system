import LineMember from "../models/LineMember.js";
import { registerValidation, loginValidation } from "../utils/validation.js";

// POST /line/member
// export const createLineMember = async (req, res) => {
//   try {
//     const lineMember = await LineMember.create(req.body);
//     res.status(201).json(lineMember);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// }

export const createLineMember = async (req, res) => {
  const { member_name, phone_no, password } = req.body;

  //Validating data before user creation
  const error = registerValidation(req.body);
  if (error[0].msg) {
    return res.status(400).send(error[0].msg);
  }

  //checking whether the user already exists in the database
  try{
    const phoneExist = await User.findOne({ phone_no: phone_no });
  if (phoneExist) {
    return res.send("Phone Number already exists");
  }
  }catch(err){
    console.log(err);
  }

  try{
      //Hashing the password
  const salt = await bcrypt.genSalt(3);
  const hashedPassword = await bcrypt.hash(password, salt);

  //creating a new user
  const user = new User({
    line_boy_no: req.body.line_boy_no,
    member_name: member_name,
    phone_no: phone_no,
    password: hashedPassword,
    address: req.body.address,  
  });
    
    const savedUser = await user.save();
    res.send({ user: savedUser._id, message: "User created" });
  } catch (err) {
    res.status(400).send(err);
  }
};

// GET /line/member
export const getAllLineMember = async (req, res) => {
  try {
    const lineMember = await LineMember.find();
    res.json(lineMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET /line/member/:email
export const getLineMemberByPhoneNum = async (req, res) => {
  try {
    const lineMember = await LineMember.findOne({
      phone_no: req.body.phone_number,
    });
    if (lineMember) {
      res.json(lineMember);
    } else {
      res.status(404).json({ message: "Line member  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// PUT /line/member
export const updateLineMemberByPhoneNum = async (req, res) => {
  try {
    const lineMember = await LineMember.findOneAndUpdate(
      { phone_no: req.body.phone_no },
      req.body,
      { new: true, upsert: true }
    );
    res.json(lineMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE /line/member/:email
export const deleteLineMemberByEmail = async (req, res) => {
  try {
    const lineMember = await LineMember.findOneAndDelete({
      email: req.params.email,
    });
    if (lineMember) {
      res.json({ message: "Line member  deleted" });
    } else {
      res.status(404).json({ message: "Line member  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// PATCH /line/member/:email
export const updateLineMemberByEmail = async (req, res) => {
  try {
    const lineMember = await LineMember.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    if (lineMember) {
      res.json(lineMember);
    } else {
      res.status(404).json({ message: "Line member  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

export const lineMemberLogin = async (req, res) => {
  try{
    const { phone_no, password } = req.body;
  
    //Validating data before cross checking credentials
    const error = loginValidation(req.body);
    if (error[0].msg) {
      return res.status(400).send(error[0].msg);
    }
  
    //checking whether the user already exists in the database
    const user = await User.findOne({  phone_no: phone_no });
    if (!user) {
      return res.send("Account with the given phone number does  not exist");
    }
  
    //Checking password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send("Invalid password");
  
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    // const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'})
    res.header("auth-token", token).send(token);
  }catch(error){
    console.log(error)
  }
  };

export const lineMemberLogout = async (req, res) => {
    try {
      res.setHeader('auth-token', '');
      res.status(200).send('User successfully logged out');
    } catch (error) {
      console.log(error);
      res.status(500).send('Server Error');
    }
  };

