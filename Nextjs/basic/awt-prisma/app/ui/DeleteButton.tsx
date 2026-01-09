"use client" 
import React from 'react' 
import { DeleteUserAction } from '@/app/action/DeleteUserAction'
import { redirect } from 'next/dist/server/api-utils';

export default function DeleteButton(paramas:any) { 
    const {id} = paramas; 
  return ( 
    <button onClick={()=>{
        var a=confirm("Are you sure you want to delete this user?");
        if(a) DeleteUserAction(id) 
        // DeleteUserAction(id) 
    }}>Delete</button> 
  ) 
} 