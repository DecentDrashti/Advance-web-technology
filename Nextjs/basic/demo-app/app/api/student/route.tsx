import {db} from '@/lib/db';
import {NextResponse} from 'next/server';

export async function GET(){
    const [students]=await db.query('SELECT * FROM students');
    return NextResponse.json({students});
}