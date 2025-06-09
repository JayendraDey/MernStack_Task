import bcrypt from "bcrypt";



export const getCookie = (req, res) => {
  const userCookie = req.cookies.user;

  if (!userCookie) {
    return res.json({ message: "no cookies are available" });
  }

  try {
    const parsed = JSON.parse(userCookie);
    res.json({ name: parsed.name, email: parsed.email });
  } catch (err) {
    return res.status(400).json({ message: "Invalid cookie format" });
  }
};



export const setCookie = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  res.cookie("user", JSON.stringify({ name, email, password: hashedPassword }), {
    httpOnly: true,     
    secure: false,       
  });

  res.json({ message: "Cookie has been set" });
};

export const updateCookie = async (req, res) => {
  const { name, email, password } = req.body;

  if (!req.cookies.user) {
    return res.json({ message: "No cookie to update" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  res.cookie("user", JSON.stringify({ name, email, password: hashedPassword }), {
    httpOnly: true,
    secure: false,
  });

  res.json({ message: "Cookie has been updated" });
};

export const deleteCookie = (req, res) => {
  res.clearCookie("user");
  res.json({ message: "Cookie has been deleted" });
};
