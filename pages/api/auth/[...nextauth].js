import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { db } from '../../../firebase';

export default NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapters: FirebaseAdapter(db),
});
