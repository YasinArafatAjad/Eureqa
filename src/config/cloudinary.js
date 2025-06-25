import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
  cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  secure: true
});

export const uploadToCloudinary = async (file, folder = 'eureqa') => {
  // Validate environment variables
  if (!import.meta.env.VITE_CLOUDINARY_CLOUD_NAME) {
    throw new Error('Cloudinary cloud name is not configured');
  }
  
  if (!import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET) {
    throw new Error('Cloudinary upload preset is not configured');
  }

  // Validate file
  if (!file) {
    throw new Error('No file provided for upload');
  }

  // Check file size (limit to 10MB)
  if (file.size > 10 * 1024 * 1024) {
    throw new Error('File size too large. Maximum size is 10MB');
  }

  // Check file type
  if (!file.type.startsWith('image/')) {
    throw new Error('Only image files are allowed');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  formData.append('folder', folder);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    // Get response text first to handle both JSON and non-JSON responses
    const responseText = await response.text();
    
    if (!response.ok) {
      let errorMessage = 'Upload failed';
      
      try {
        const errorData = JSON.parse(responseText);
        if (errorData.error && errorData.error.message) {
          errorMessage = errorData.error.message;
        }
      } catch (parseError) {
        // If response is not JSON, use the text as error message
        errorMessage = responseText || `HTTP ${response.status}: ${response.statusText}`;
      }
      
      console.error('Cloudinary upload failed:', {
        status: response.status,
        statusText: response.statusText,
        response: responseText
      });
      
      throw new Error(errorMessage);
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Cloudinary response:', responseText);
      throw new Error('Invalid response from Cloudinary');
    }

    if (!data.secure_url) {
      console.error('No secure_url in Cloudinary response:', data);
      throw new Error('Upload completed but no URL received');
    }

    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    
    // Re-throw with more specific error messages
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Network error: Unable to connect to Cloudinary. Please check your internet connection.');
    }
    
    if (error.message.includes('NetworkError')) {
      throw new Error('Network error: Please check your internet connection and try again.');
    }
    
    // If it's already our custom error, re-throw as is
    throw error;
  }
};

export default cloudinary;