const users = {
      user1:'Oussama',
      user2:'Mohammed',
      user3:'François',
      user4:'Youness'
    }
export const getPosts = async (req, res) => {
  try {


    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
