import File from "../models/filModel.js";

export const uploadFile = async (req, res) => {
  try {
    const { originalname, path } = req.file;

    const file = new File({
      filename: originalname,
      path: path,
    });

    await file.save();
    res.status(201).json(file);
  } catch (err) {
    res.status(500).json({ error: "File upload failed", message: err.message });
  }
};

export const getFiles = async (req, res) => {
  try {
    const files = await File.find().sort({ uploadedAt: -1 });
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch files", message: err.message });
  }
};
