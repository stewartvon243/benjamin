// Image utility functions for handling multiple images
export const loadImage = (imagePath) => {
    try {
        // Handle local images with require
        if (typeof imagePath === 'string' && imagePath.startsWith('./')) {
            return require(imagePath);
        }
        // Handle local images with relative path
        if (typeof imagePath === 'string' && !imagePath.startsWith('http')) {
            return require(`../assets/images/${imagePath}`);
        }
        // Return as-is for external URLs or already processed images
        return imagePath;
    } catch (error) {
        console.warn(`Failed to load image: ${imagePath}`, error);
        return null;
    }
};

export const processImageArray = (imageArray) => {
    return imageArray.map(item => ({
        ...item,
        img: loadImage(item.img)
    }));
};

// Preload images for better performance
export const preloadImages = (imageArray) => {
    imageArray.forEach(item => {
        if (item.img) {
            const img = new Image();
            img.src = typeof item.img === 'string' ? item.img : item.img.default || item.img;
        }
    });
};

// Validate image format
export const validateImageFormat = (imagePath) => {
    const validFormats = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
    const extension = imagePath.toLowerCase().split('.').pop();
    return validFormats.includes(`.${extension}`);
};
