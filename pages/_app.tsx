import '@/styles/globals.css'
import '@/styles/form.css'
import '@/styles/profile-card.scss'
import type { AppProps } from 'next/app'
import { ReactDOM } from 'react';
import FormMahasiswa from './forminputmahasiswa';


export default function ProfileForm() {
  return (
    <FormMahasiswa />
    )
  }