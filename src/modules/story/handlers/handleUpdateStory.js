const Story = require("../dbSchema");

/**
 * This is a handler for finding stories
 * @param {*} req
 * @param {*} res
 */
const handleUpdateStory=async (req, res) => {
  const {id}=req.params;
  const updateStory = await Story.findByIdAndUpdate(id);

  // Sending Story
  res.status(200).json({
    data: updateStory,
    error: { code: null, message: null },
  });
};

module.exports = handleUpdateStory;
