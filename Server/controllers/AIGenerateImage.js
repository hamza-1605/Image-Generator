export const generateImage = async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ success: false, msg: "Prompt is required" });
    }

    try {
        const width = 1024;
        const height = 1024;
        const seed = 42; // Each seed generates a new image variation
        const model = 'flux'; // Using 'flux' as default if model is not provided

        const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

        const response = await fetch(imageUrl);

        const arrayBuffer = await response.arrayBuffer(); // ✅ modern replacement
        const buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Node Buffer

        // Convert to base64 so frontend can directly display it
        const base64Image = buffer.toString("base64");


        res.status(200).json({
            success: true,
            message: "Image generated successfully!",
            image:  `data:image/png;base64,${base64Image}`
        });
    } 
    catch (error) {
        console.error("Error generating image:", error);
        res.status(500).json({ 
            success: false, 
            message: "Image generation failed", 
            error: error.message 
        });
    }
};
