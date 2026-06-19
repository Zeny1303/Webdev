// server ko start karne ke liye
// server ka instance acquire hoga aur app meinstore hoga
const app = require('./src/app');

// server ko start karne ke liye
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});