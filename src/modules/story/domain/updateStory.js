const { sterilizeMany } = require("../../shared/sterilize");

//is String

const isString = (data) => data && typeof data === "string";

// Validate
const validateStory = (unvalidateStory) => {
  let errMgs = "";
  let data=sterilizeMany(unvalidateStory);
  const msg="must be apha-numeric"

  if (isString(data.title)) errMgs += `Title ${msg}`;
  if (isString(data.content)) errMgs += `Content ${msg}`;
  if (isString(data.title)) errMgs += `Image ${msg}`;

  // Prepare validate
  return { data, isValid: errMgs.length < 1, message: errMgs };
};

// Create an Updatestory
const updateStory = (unvalidateStory) => {
  // Validate Story
  const { data, isValid, message } = validateStory(unvalidateStory);

  // Check if data is valid
  if (isValid) {
    const update={};
    if (data.title) update.title=data.title;
    if (data.content) update.content=data.content;
    if (data.image) update.image=data.image;
    return { tag: "passed",data:update};
  }

  // Return Story
  return { tag: "failed", message };
};

module.exports = createStory;
