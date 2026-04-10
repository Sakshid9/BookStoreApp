import Contact from "../model/contact.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    const createdMessage = new Contact({
      fullname,
      email,
      message,
    });
    await createdMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};