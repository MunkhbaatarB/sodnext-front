import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Fetch from your Laravel API
    const response = await fetch('http://worldmongolians.com/api/jobs', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Return the data with proper CORS headers
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Failed to fetch jobs:', error);
    
    // Return fallback data if the external API fails
    const fallbackData = {
      data: [
        { id: 1, position: "Frontend Developer", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 2, position: "Backend Developer", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 3, position: "Full Stack Developer", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 4, position: "UI/UX Designer", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 5, position: "DevOps Engineer", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 6, position: "Mobile Developer", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 7, position: "Data Analyst", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 8, position: "Product Manager", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 9, position: "QA Engineer", type: "Бүтэн цагийн", location: "Улаанбаатар" },
        { id: 10, position: "System Administrator", type: "Бүтэн цагийн", location: "Улаанбаатар" },
      ]
    };

    return NextResponse.json(fallbackData, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
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