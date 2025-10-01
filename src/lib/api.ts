// API configuration for the application
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://worldmongolians.com/api';

// Default fetch options
export const defaultFetchOptions: RequestInit = {
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

// Helper function for API calls
export const apiRequest = async (
  endpoint: string, 
  options: RequestInit = {}
): Promise<Response> => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    ...defaultFetchOptions,
    ...options,
    headers: {
      ...defaultFetchOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Specific function for job application submission
export const submitJobApplication = async (formData: FormData): Promise<any> => {
  const response = await fetch(`${API_BASE_URL}/job-applications`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};