import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';

// To display dummy tickets for starters and for testing
export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);

    return NextResponse.json({ message: 'Ticket Created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}

// To fetch all our tickets from our database and display them on our ticket display screen
export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
