import { Data }from '../model/data.js';


export const addData = async (req, res) => {
  try {
    const { category, value } = req.body;
    const newData = new Data({ category, value });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAggregatedData = async (req, res) => {
  try {
    const result = await Data.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          averageValue: { $avg: '$value' },
        },
      },
      { $sort: { averageValue: -1 } },
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
