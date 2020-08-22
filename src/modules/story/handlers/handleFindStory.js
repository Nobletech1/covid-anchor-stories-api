const Story = require("../dbSchema");

/**
 * This is a handler for finding story
 * @param {*} req
 * @param {*} res
 */  
const handleFindStory = async (req, res) => {
  const story = await Story.find({});

  // Sending Story
  res.status(200).json({
    data: story,
    error: { code: null, message: null },
  });
};

module.exports=handleFindStory;
