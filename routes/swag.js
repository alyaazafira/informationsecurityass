
//     // Staff login
// /**
//  * @swagger
//  *  /login-staff:
//     post:
//       description: Staff login
//       requestBody:
//         required: true
//         content:
//           application/json:
//             schema:
//               type: object
//               properties:
//                 username:
//                   type: string
//                 password:
//                   type: string
//       responses:
//         '200':
//           description: Successful login
//           content:
//             application/json:
//               schema:
//                 type: object
//                 properties:
//                   token:
//                     type: string
//         '401':
//           description: Invalid credentials
//  */
//                   app.post('/login-staff', async (req, res) => {
//                     const { username, password } = req.body;
                  
//                     const staff = await staffDB.findOne({ username });
                  
//                     if (!staff) {
//                       return res.status(401).send('Invalid credentials');
//                     }
                  
//                     const passwordMatch = await bcrypt.compare(password, staff.password);
                  
//                     if (!passwordMatch) {
//                       return res.status(401).send('Invalid credentials');
//                     }
                  
//                     const token = jwt.sign({ username, role: 'staff' }, secretKey);
//                     staffDB
//                       .updateOne({ username }, { $set: { token } })
//                       .then(() => {
//                         res.status(200).json({ token });
//                       })
//                       .catch(() => {
//                         res.status(500).send('Error storing token');
//                       });
//                   });