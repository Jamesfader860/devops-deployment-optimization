const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Version tracking for deployments
const APP_VERSION = "1.0.1";

app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 100px;">
            <h1 style="color: #2c3e50;">🚀 Production Application Baseline</h1>
            <p style="font-size: 1.2em; color: #7f8c8d;">Status: <strong style="color: #27ae60;">ONLINE</strong></p>
            <p style="background: #ecf0f1; display: inline-block; padding: 10px 20px; border-radius: 5px;">
                <strong>Deployment Version:</strong> v${APP_VERSION}
            </p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Application running locally on port ${PORT}`);
});
