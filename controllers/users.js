import jwt  from 'jsonwebtoken';
let secretOrKey = 'secret';

export const login = (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
  

      if (email!="test@test.com" || password!="test") {
        let msg_errors = 'email or password incorrect';
        return res.status(404).json(msg_errors);
      }else{
        const payload = { id:1, email: email}; // Create JWT Payload
  
          // Sign Token
          jwt.sign(
            payload,
            secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token:token
              });
            }
          );
      }

    };

  
  