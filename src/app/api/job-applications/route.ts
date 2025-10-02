import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    
    // Log the form data for debugging
    console.log('Form data received:', {
      name: formData.get('name'),
      email: formData.get('email'),
      position: formData.get('position'),
      file: formData.get('file') ? 'File present' : 'No file'
    });
    
    // Forward the request to your Laravel API
    const response = await fetch('http://worldmongolians.com/api/job-applications', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        'Origin': 'http://localhost:3000',
      },
      // Don't set Content-Type header for FormData, let fetch handle it
    });

    let result;
    const contentType = response.headers.get('content-type');
    
    // Handle redirects and different response types
    if (!response.ok) {
      console.error('API Response Error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error details:', errorText);
      
      // Try to parse error as JSON for better error messages
      let errorDetails;
      try {
        errorDetails = JSON.parse(errorText);
      } catch {
        errorDetails = { message: errorText };
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to submit application', 
          message: errorDetails.message || `Server responded with ${response.status}: ${response.statusText}`,
          details: errorDetails.errors || errorText,
          status: response.status
        },
        {
          status: response.status,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        }
      );
    }
    
    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    } else {
      const textResult = await response.text();
      result = { 
        message: 'Application submitted successfully',
        response: textResult
      };
    }

    // Return the response with proper CORS headers
    return NextResponse.json(result, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Failed to submit job application:', error);
    
    // Check if it's a network error (CORS, timeout, etc.)
    let errorMessage = 'Failed to submit application';
    let statusCode = 500;
    
    if (error.message.includes('fetch')) {
      errorMessage = 'Network error: Unable to connect to the application server';
      statusCode = 503;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage, 
        message: error.message,
        timestamp: new Date().toISOString()
      },
      {
        status: statusCode,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}