/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    friendlyName: 'View User',
  
  
    description: 'Display or redirect to the appropriate homepage, depending on login status.',
  
  
    exits: {
  
      success: {
        statusCode: 200,
        description: 'Requesting user is a guest, so show the public landing page.',
        viewTemplatePath: 'user'
      },
  
      redirect: {
        responseType: 'redirect',
        description: 'Requesting user is logged in, so redirect to the internal welcome page.'
      },
  
    },
  
  
    fn: async function (req, res) {
      let allUsers;

      allUsers = await User.find();
  
      return res.view('user', { users: allUsers });
    }
  
  
  };
