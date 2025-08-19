import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    console.log('req', searchParams.get('nama'));// baca params
    return NextResponse.json(
        { message: 'Hello from the posts API!' },
        { status: 200 }
    );
}
export async function POST(request: Request) {
    const body = await request.json() // fungsi baca body
    return NextResponse.json(
        { message: body },
        { status: 200 }
    );
}
export async function PUT(request: Request) {

}
export async function DELETE(request: Request) {

}